import express from "express";
import http from "http";
import https from "https";
import bodyParser from "body-parser";
import fs from "fs";
import qs from "qs";

export class easyExpress {
    constructor(option?: {
        /** これを指定すると自動的にhttpsモードになります。 */
        https: {
            cert: string;
            key: string;
        };
        /** getメソッドを受信した際に、特定のフォルダ内を参照し返答するようにコードを自動でセットします。パスが存在しない場合は自動で無効になります。 */
        getMethodToFilePath: string;
    }) {
        this.app = express();
        if (option?.https) {
            this.data.server = https.createServer({
                key: option.https.key,
                cert: option.https.cert,
            });
        } else this.data.server = http.createServer();
        if (option?.getMethodToFilePath) this.getMethodToFilePath = option.getMethodToFilePath;
        this.app.get("*", (req, res) => {
            if (this.getMethodToFilePath) {
            }
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
    getMethodToFilePath: string | undefined;
    #get: ((req: express.Request, res: express.Response) => void) | undefined;
    #post: ((req: express.Request, res: express.Response) => void) | undefined;
    #easyPost: ((data: string, req: express.Request, res: express.Response) => void) | undefined;
    /** easyExpressを立ち上げるために使用された変数です。 */
    data: {
        /**
         *
         */
        server: http.Server | https.Server | undefined;
    } = { server: undefined };
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
