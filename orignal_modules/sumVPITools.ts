import { JSDOM } from "jsdom";
import { easyExpress } from "./easyExpress.js";

export class sumVPITools {
    constructor() {
        sumVPITools.cuiIO();
        sumVPITools.guiIO();
    }
    /**
     * 主にreadlineを利用して作られたターミナル操作用プログラムです。
     */
    static cuiIO() {}
    /**
     * expressを利用したWeb上アプリケーションシステムを提供します。
     *
     * Various Programs同様、Window Systemをはじめ、様々なプログラムを同梱します。
     *
     * このプログラムは、現在未完成であるため、どのような形になるのかが未決定です。しばらくお待ちください。
     */
    static guiIO() {
        /**
         * HTMLファイルを疑似的に表現します。
         */
        const mainHtmlFileIsDom = new JSDOM().window;

        const exp = new easyExpress();
        exp.get((req, res) => {
            easyExpress.easyGetReply(req, res, "./src");
        });
        exp.listen("80");
    }
}
