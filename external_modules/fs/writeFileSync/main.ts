import fs from "fs";
import { PathOrFileDescriptor, WriteFileOptions } from "../interfaceAndTypeDef.js";

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
export function writeFileSync(
    file: PathOrFileDescriptor,
    data: string | NodeJS.ArrayBufferView,
    options?: WriteFileOptions,
): void {
    fs.writeFileSync(file, data, options);
}
