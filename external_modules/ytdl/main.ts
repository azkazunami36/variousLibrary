import { chooseFormat } from "./chooseFormat/main.js";
import { filterFormats } from "./filterFormats/main.js";
import { getBasicInfo } from "./getBasicInfo/main.js";
import { getInfo } from "./getInfo/main.js";
import { getURLVideoID } from "./getURLVideoID/main.js";
import { getVideoID } from "./getVideoID/main.js";
import { validateID } from "./validateID/main.js";
import { validateURL } from "./validateURL/main.js";
import { version } from "./version/main.js";

export class ytdl {
    static chooseFormat = chooseFormat;
    static filterFormats = filterFormats;
    static getBasicInfo = getBasicInfo;
    static getInfo = getInfo;
    static getURLVideoID = getURLVideoID;
    static getVideoID = getVideoID;
    static validateID = validateID;
    static validateURL = validateURL;
    static version = version;
}
