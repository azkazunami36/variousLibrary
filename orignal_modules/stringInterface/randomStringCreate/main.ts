import { replace } from "../replace/main";

/**
 * ランダムな英数字の文字列を生成可能です。
 */
export function randomStringCreate(
    /** 文字列の長さを入力します。 */
    length: number,
    /** 様々なオプションをつけることが出来ます。 */
    option?: {
        /** 小文字の英字を含めるかを決めます。 */
        str?: boolean;
        /** 大文字の英字を含めるかを決めます。 */
        num?: boolean;
        /** 数字を含めるかを決めます。 */
        upstr?: boolean;
        /** ランダム文字列に含めたい文字を文字列で入力します。 */
        originalString?: string;
        /**
         * 特定の個所に特定の文字列を置きたい場合に指定でき、複数個所を指定することが出来ます。
         * 場合によっては指定した文字列の長さを超える可能性があります。
         */
        setStr?: {
            /** どこの箇所を置き換えるかを指定します。0からカウントされます。 */
            setNum: number;
            /** 何の文字にするかを指定します。１文字推奨です。 */
            string: string;
        }[];
        /**
         * 重複を最小限に抑えるために利用する場合、時間を数字として文字列内に入れます。指定しない場合入れません。
         * もし指定された長さより長い数字となった場合、省略されるため重複の恐れがあります。
         */
        timeNow?: {
            /** ここを有効にすると最初のほうに設置します。 */
            start?: boolean;
            /** ここを有効にすると最後のほうに設置します。 */
            end?: boolean;
        };
    },
) {
    const str = "abcdefghijklmnopqrstuvwxyz";
    const num = "0123456789";
    const upstr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let conster = "";
    if (option?.str) conster += str;
    if (option?.num) conster += num;
    if (option?.upstr) conster += upstr;
    if (option?.originalString) conster += option.originalString;
    if (conster === "") return "";
    let string = "";
    for (let i = 0; i !== length; i++) string += conster[Math.floor(Math.random() * conster.length)];
    if (option?.setStr)
        for (let i = 0; i !== option.setStr.length; i++)
            string = replace(string, option.setStr[i].setNum, option.setStr[i].string);
    if (option?.timeNow) {
        const time = String(Date.now());
        if (option.timeNow.start) string = replace(string, 0, time);
        if (option.timeNow.end) string = replace(string, string.length - time.length, time);
    }
    return string;
}
