import { chooseFormat } from "./chooseFormat/main.js";
import { filterFormats } from "./filterFormats/main.js";
import { getBasicInfo } from "./getBasicInfo/main.js";
import { getInfo } from "./getInfo/main.js";
import { getURLVideoID } from "./getURLVideoID/main.js";
import { getVideoID } from "./getVideoID/main.js";
import { validateID } from "./validateID/main.js";
import { validateURL } from "./validateURL/main.js";
import { version } from "./version/main.js";

export default new class ytdl {
    chooseFormat = chooseFormat
    filterFormats = filterFormats
    getBasicInfo = getBasicInfo
    getInfo = getInfo
    getURLVideoID = getURLVideoID
    getVideoID = getVideoID
    validateID = validateID
    validateURL = validateURL
    version = version
};

