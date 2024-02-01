import chooseFormat from "./chooseFormat/main.js";
import filterFormats from "./filterFormats/main.js";
import getBasicInfo from "./getBasicInfo/main.js";
import getInfo from "./getInfo/main.js";
import getURLVideoID from "./getURLVideoID/main.js";
import getVideoID from "./getVideoID/main.js";
import validateID from "./validateID/main.js";
import validateURL from "./validateURL/main.js";
import version from "./version/main.js";

/**
 * YouTubeのソースを取得するモジュール
 * ダウンロードや表示、収集が可能です。
 */
declare module ytdl {
    export {
        chooseFormat,
        filterFormats,
        getBasicInfo,
        getInfo,
        getURLVideoID,
        getVideoID,
        validateID,
        validateURL,
        version
    }
};
export default ytdl;
