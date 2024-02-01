import fs from "fs";
import { PathLike } from "../interfaceAndTypeDef.js";

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
export function readdirSync(
    path: PathLike,
    options?:
        | {
            encoding: BufferEncoding | null;
            withFileTypes?: false | undefined;
            recursive?: boolean | undefined;
        }
        | BufferEncoding
        | null,
): string[] {
    return fs.readdirSync(path, options);
};