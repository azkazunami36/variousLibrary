import express from "express";
import http from "http";
import https from "https";
import bodyParser from "body-parser";
import fs from "fs";
import fsP from "fs/promises";
import qs from "qs";

import { path } from "../../external_modules/path/main.js";
import { contentTypeToExtConvert } from "../contentTypeToExtConvert/main.js";

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
        headers["Content-Type"] = contentType;
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
            options.end = Number(ranges[1]) || Math.min(options.start + chunkSize, fileSize - 1)
            if (!req.headers.range) options.end = fileSize - 1;
            headers["Content-Length"] = String(fileSize)
            if (req.headers.range) headers["Content-Length"] = String(options.end - options.start + 1)
            headers["Content-Range"] = "bytes " + options.start + "-" + options.end + "/" + fileSize
            res.writeHead(req.headers.range ? 206 : 200, headers);
            const stream = fs.createReadStream(filepath, options);
            stream.on("data", (chunk) => res.write(chunk));
            stream.on("end", () => res.end());
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
         *
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
}
