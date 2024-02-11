import fs from "fs";
import { PathLike } from "../interfaceAndTypeDef.js";

export function readdirSync(
    path: PathLike,
    options?:
        | {
            encoding: BufferEncoding | null;
            withFileTypes?: false | undefined;
            recursive?: boolean | undefined;
        }
        | BufferEncoding
        | null
): string[] {
    return fs.readdirSync(path, options);
};
