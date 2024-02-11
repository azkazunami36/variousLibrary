import express from "express";
import http from "http";
import https from "https";
import bodyParser from "body-parser";
import fs from "fs";

export class easyExpress {
    constructor(option?: {
        /** これを指定すると自動的にhttpsモードになります。 */
        https: {
            cert: string
            key: string
        }
    }) {
        this.app = express();
        if (option?.https) {
            this.data.server = https.createServer({
                key: option.https.key,
                cert: option.https.cert
            });
        }
        else this.data.server = http.createServer();

        this.app.use(bodyParser.urlencoded({ limit: "127gb", extended: true }));
    }
    /** easyExpressを立ち上げるために使用された変数です。 */
    data: {
        /**
         * 
         */
        server: http.Server | https.Server | undefined
    } = {
        server: undefined
    }
    app: express.Express
}
