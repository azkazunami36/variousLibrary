import ytdlD from "ytdl-core";

function test() {
    ytdlD.chooseFormat
    ytdlD.filterFormats
    ytdlD.getBasicInfo
    ytdlD.getInfo
    ytdlD.getURLVideoID
    ytdlD.getVideoID
    ytdlD.validateID
    ytdlD.validateURL
    ytdlD.version
}

declare module ytdl { export {  } };
export default ytdl;
