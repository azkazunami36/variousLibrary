import fss from "fs";

import existsSync from "./existsSync/main"

/**
 * fsモジュールでサポートされているパス
 */
export type PathLike = string | Buffer | URL

/** fsの元関数を検索するための一時的な置き場所です。 */
function list() {
    fss.readFileSync
    fss.writeFileSync
    fss.readdirSync
    fss.writeFileSync
    fss.lstatSync
    fss.unlinkSync
    fss.symlinkSync
    fss.createReadStream
    fss.createWriteStream
    fss.openSync
}

/**
 * node:fsモジュールを使用すると、標準のPOSIX関数に近い方法でファイルシステムを扱うことが出来ます。
 * 
 * PromiseベースのAPIを使用するには:
 * ```js
 * import * as fs from "node:fs/promises";
 * ```
 * コールバックAPIと同期APIを使用するには:
 * ```js
 * import * as fs from 'node:fs';
 * ``` 
 * すべてのファイルシステム操作には、同期、コールバック、Promiseベースの形式があり、CommonJS構文とES6モジュール(ESM)の両方を使用してアクセスできます。
 * 
 * @see [source] (https://github.com/nodejs/node/blob/v20.2.0/lib/fs.js)
 */
declare module fs { export { existsSync } }
export default fs
