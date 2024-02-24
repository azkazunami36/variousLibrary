import { existsSync } from "./existsSync/main.js";
import { readdirSync } from "./readdirSynd/main.js";
import { readFileSync } from "./readFileSync/main.js";
import { writeFileSync } from "./writeFileSync/main.js";

export class fs {
    static existsSync = existsSync;
    static readdirSync = readdirSync;
    static readFileSync = readFileSync;
    static writeFileSync = writeFileSync;
}
