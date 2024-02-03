import express from "express";
import http from "http";
import https from "https";
import bodyParser from "body-parser";
import fs from "fs";

/**
 * これはexpressの設定をかずなみ用に簡略化した、簡単に構築が出来るeasyなexpressです。
 */
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

        }
        else this.data.http = http.createServer();

        this.app.use(bodyParser.urlencoded({ limit: "127gb", extended: true }));
    }
    /** easyExpressを立ち上げるために使用された変数です。 */
    data: {
        http: http.Server,
        https: https.Server,
    }
    app: express.Express
}
export default easyExpress;