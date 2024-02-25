import { JSDOM } from "jsdom";


/**
 * 旧Various Programsをライブラリに組み込みました。  
 * SumVPITools (**Sum**wave **V**arious **P**rograms U**I** **I**O **Tools*)です。
 */
export class sumVPITools {
    /**
     * 主にreadlineを利用して作られたターミナル操作用プログラムです。
     */
    static cuiIO() {}
    /**  */
    static guiIO() {
        const mainHtmlFileIsDom = new JSDOM().window;
    }
}