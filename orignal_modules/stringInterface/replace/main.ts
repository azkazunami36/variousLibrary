/**
 * 特定の個所を特定の文字列に置き換えます。
 * @param string 置き換え元の文字列を入力
 * @param num 置き換えたい箇所の番号
 * @param replaceStr 置き換えられる文字列
 * @returns 置き換えられた文字列
 */
export function replace(string: string, num: number, replaceStr: string) {
    const start = string.slice(0, num);
    const end = string.slice(num + replaceStr.length, string.length);
    return start + replaceStr + end;
}
