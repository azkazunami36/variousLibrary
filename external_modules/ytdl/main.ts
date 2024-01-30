import chooseFormat from "./chooseFormat/main";
import filterFormats from "./filterFormats/main";
import getBasicInfo from "./getBasicInfo/main";
import getInfo from "./getInfo/main";
import getURLVideoID from "./getURLVideoID/main";
import getVideoID from "./getVideoID/main";
import validateID from "./validateID/main";
import validateURL from "./validateURL/main";
import version from "./version/main";

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
