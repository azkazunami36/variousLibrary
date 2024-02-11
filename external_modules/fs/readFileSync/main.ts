import fs from "fs";
import { PathOrFileDescriptor } from "../interfaceAndTypeDef.js";
export function readFileSync(
    path: PathOrFileDescriptor,
    options?: {
        encoding?: null | undefined;
        flag?: string | undefined;
    } | null
): Buffer {
    return fs.readFileSync(path, options)
};

