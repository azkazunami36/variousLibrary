import express from "express";
import http from "http";
import https from "https";
import bodyParser from "body-parser";
import fs from "fs";
import fsP from "fs/promises";

import { path } from "../external_modules/path/main.js";
import { contentTypeToExtConvert } from "./contentTypeToExtConvert.js";

export class easyExpress {
    constructor(option?: {
        /** これを指定すると自動的にhttpsモードになります。 */
        https?: {
            cert: string;
            key: string;
        };
    }) {
        this.app = express();
        if (option?.https) {
            this.data.server = https.createServer({
                key: option.https.key,
                cert: option.https.cert,
            });
        } else this.data.server = http.createServer();
        this.app.get("*", (req, res) => {
            if (this.#get) this.#get(req, res);
        });
        this.app.post("*", (req, res) => {
            if (this.#post) this.#post(req, res);
            if (this.#easyPost) {
                let data = "";
                req.on("data", (chunk) => {
                    data += chunk;
                });
                req.on("end", () => {
                    if (this.#easyPost) this.#easyPost(data, req, res);
                });
            }
        });
        this.app.use(bodyParser.urlencoded({ limit: "127gb", extended: true }));
    }
    /**
     * 情報源: [HTTP レスポンスコード](https://developer.mozilla.org/ja/docs/Web/HTTP/Status)
     */
    static statusCode() {
        return {
            100: "Continue",
            101: "Switching Protocols",
            102: "Processing",
            103: "Early Hints",
            200: "OK",
            201: "Created",
            202: "Accepted",
            203: "Non-Authoritative Information",
            204: "No Content",
            205: "Reset Content",
            /** サーバー側で処理方法がわからない事態が発生したことを示します。 */
            500: "Internal Server Error",
            /** リクエストメソッドをサーバーが対応しておらず、扱えないことを示します。サーバーが対応しなければならない (従って、このコードを返してはならない) メソッドは `GET` と `HEAD` だけです。 */
            501: "Not Implemented",
            /** このエラーレスポンスは、リクエストの処理に必要なレスポンスを受け取るゲートウェイとして動作するサーバーが無効なレスポンスを受け取ったことを示します。 */
            502: "Bad Gateway",
            /** サーバーはリクエストを処理する準備ができていないことを示します。 一般的な原因は、サーバーがメンテナンスや過負荷でダウンしていることです。 このレスポンスとともに問題について説明する、ユーザーにわかりやすいページを送信するべきであることに注意してください。 このレスポンスは一時的な状況について使用するものであり、また可能であれば、サービスが復旧する前に HTTP の `Retry-After` ヘッダーに予定時刻を含めてください。 また、これら一時的な状況のレスポンスは通常キャッシュされるべきではないことから、ウェブ管理者はこのレスポンスとともに送られるキャッシュ関連のヘッダーに注意しなければなりません。 */
            503: "Service Unavailable",
            /** このエラーレスポンスは、ゲートウェイとして動作するサーバーが時間内にレスポンスを得られない場合に送られます。 */
            504: "Gateway Timeout",
            /** リクエストで使用した HTTP のバージョンにサーバーが対応していないことを示します。 */
            505: "HTTP Version Not Supported",
            /** サーバーに内部構成エラーがあることを示します。選択したバリアントリソースが透過的コンテンツネゴシエーション自体に携わるよう設定されており、ネゴシエーションプロセスが正しく終了しなかったことを示します。 */
            506: "Variant Also Negotiates",
            /** サーバーがリクエストを完了させるのに必要な表現を保存することができなかったため、メソッドがリソースに対して実行できなかったことを示します。 */
            507: "Insufficient Storage",
            /** サーバーは、リクエストの処理中に無限ループを検出しました。 */
            508: "Loop Detected",
            /** サーバーがリクエストを処理するために、リクエストをさらに拡張することが必要です。 */
            510: "Not Extended",
            /** クライアントがネットワークでアクセスするために認証が必要であることを示します。 */
            511: "Network Authentication Required",
        };
    }
    /**
     * これをget関数内で使用すると、getの返信をすべてこの関数が終了させてくれます。
     * その代わり、Responseの返答は既に終了(end)しているので、他の操作を行うことは出来なくなります。
     * @param req
     * @param res
     * @param filePath
     */
    static async easyGetReply(req: express.Request, res: express.Response, folderPath: string) {
        const url = req.url[req.url.length - 1] !== "/" ? req.url : req.url + "index.html";
        const contentType = contentTypeToExtConvert(path.extname(url).replace(".", ""), "contentType");
        const filepath = folderPath + url;
        const headers: http.OutgoingHttpHeaders | http.OutgoingHttpHeader[] = {};
        headers["Accept-Ranges"] = "bytes";
        if (contentType !== undefined) headers["Content-Type"] = contentType;
        if (fs.existsSync(filepath)) {
            const fileSize = (await fsP.stat(filepath)).size;
            const chunkSize = 1 * 1e7; //チャンクサイズ

            const ranges = String(req.headers.range).split("-");
            if (ranges[0]) ranges[0] = ranges[0].replace(/\D/g, "");
            if (ranges[1]) ranges[1] = ranges[1].replace(/\D/g, "");
            //これは取得するデータ範囲を決定します。
            const options = {
                start: Number(ranges[0]),
                end: 0,
            };
            options.end = Number(ranges[1]) || Math.min(options.start + chunkSize, fileSize - 1);
            if (!req.headers.range) options.end = fileSize !== 0 ? fileSize - 1 : 0;
            headers["Content-Length"] = String(fileSize);
            if (req.headers.range) headers["Content-Length"] = String(options.end - options.start + 1);
            headers["Content-Range"] = "bytes " + options.start + "-" + options.end + "/" + fileSize;
            try {
                const stream = fs.createReadStream(filepath, options);
                res.writeHead(req.headers.range ? 206 : 200, headers);
                stream.on("data", (chunk) => res.write(chunk));
                stream.on("end", () => res.end());
            } catch (e) {
                console.log(e, headers);
                res.writeHead(500);
                res.end();
            }
        } else {
            res.writeHead(404, headers);
            res.end();
        }
    }
    #get?: (req: express.Request, res: express.Response) => void;
    #post?: (req: express.Request, res: express.Response) => void;
    #easyPost?: (data: string, req: express.Request, res: express.Response) => void;
    /** easyExpressを立ち上げるために使用された変数です。 */
    data: {
        /**
         * サーバーが登録されます。
         */
        server?: http.Server | https.Server;
    } = {};
    app: express.Express;
    get(callback: (req: express.Request, res: express.Response) => void) {
        this.#get = callback;
    }
    post(callback: (req: express.Request, res: express.Response) => void) {
        this.#post = callback;
    }
    easyPost(callback: (data: string, req: express.Request, res: express.Response) => void) {
        this.#easyPost = callback;
    }
    listen(path: string, callback?: (() => void) | undefined) {
        this.app.listen(path, callback);
    }
}
