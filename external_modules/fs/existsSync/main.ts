import fs from "fs";

import { PathLike } from "../interfaceAndTypeDef.js";

export function existsSync(path: PathLike) {
    return fs.existsSync(path)
};
