import fs from "fs";
import { PathOrFileDescriptor, WriteFileOptions } from "../interfaceAndTypeDef.js";

export function writeFileSync(
    file: PathOrFileDescriptor,
    data: string | NodeJS.ArrayBufferView,
    options?: WriteFileOptions,
): void {
    fs.writeFileSync(file, data, options);
};
