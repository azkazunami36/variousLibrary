import fss from "fs";

import { existsSync } from "./existsSync/main.js";
import { readdirSync } from "./readdirSynd/main.js";
import { readFileSync } from "./readFileSync/main.js";
import { writeFileSync } from "./writeFileSync/main.js";

/** fsの元関数を検索するための一時的な置き場所です。 */
function list() {
    fss.lstatSync
    fss.unlinkSync
    fss.symlinkSync
    fss.createReadStream
    fss.createWriteStream
    fss.openSync
}
export default new class fs {
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
    existsSync = existsSync;
    /**
     * Reads the contents of the directory.
     *
     * See the POSIX [`readdir(3)`](http://man7.org/linux/man-pages/man3/readdir.3.html) documentation for more details.
     *
     * The optional `options` argument can be a string specifying an encoding, or an
     * object with an `encoding` property specifying the character encoding to use for
     * the filenames returned. If the `encoding` is set to `'buffer'`,
     * the filenames returned will be passed as `Buffer` objects.
     *
     * If `options.withFileTypes` is set to `true`, the result will contain `fs.Dirent` objects.
     * @since v0.1.21
     */
    readdirSync = readdirSync;
    /**
     * Returns the contents of the `path`.
     *
     * For detailed information, see the documentation of the asynchronous version of
     * this API: {@link readFile}.
     *
     * If the `encoding` option is specified then this function returns a
     * string. Otherwise it returns a buffer.
     *
     * Similar to {@link readFile}, when the path is a directory, the behavior of`fs.readFileSync()` is platform-specific.
     *
     * ```js
     * import { readFileSync } from 'node:fs';
     *
     * // macOS, Linux, and Windows
     * readFileSync('<directory>');
     * // => [Error: EISDIR: illegal operation on a directory, read <directory>]
     *
     * //  FreeBSD
     * readFileSync('<directory>'); // => <data>
     * ```
     * @since v0.1.8
     * @param path filename or file descriptor
     */
    readFileSync = readFileSync;
    /**
     * Returns `undefined`.
     *
     * The `mode` option only affects the newly created file. See {@link open} for more details.
     *
     * For detailed information, see the documentation of the asynchronous version of
     * this API: {@link writeFile}.
     * @since v0.1.29
     * @param file filename or file descriptor
     */
    writeFileSync = writeFileSync;
};
