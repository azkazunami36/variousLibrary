import fs from "fs";
import { PathOrFileDescriptor } from "../interfaceAndTypeDef.js";
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
export function readFileSync(
    path: PathOrFileDescriptor,
    options?: {
        encoding?: null | undefined;
        flag?: string | undefined;
    } | null
): Buffer {
    return fs.readFileSync(path, options)
};

