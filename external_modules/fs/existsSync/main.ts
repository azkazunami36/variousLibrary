import fs from "fs";

import { PathLike } from "../main";

/**
 * 指定したパス先が存在する場合は`true`、存在しない場合は`false`です。
 * 
 * 詳細については、このAPIの非同期バージョンのドキュメントを参照してください。
 * 
 * `fs.exists()` は非推奨とし、この `fs.existsSync()` を推奨とされています。その理由は、 `fs.exists()` のコールバックパラメータは他のNode.jsコールバックと矛盾するパラメータを受け入れますが、`fs.existsSync()`はコールバックを使用しないためです。
 * ```js
 * import { existsSync } from "node:fs";
 * 
 * if (existsSync("/etc/passwd"))
 *   console.log("このパスは存在します。");
 * ```
 * @since — v0.1.21
 */
export function existsSync(path: PathLike) {
    return fs.existsSync(path)
}

export default existsSync
