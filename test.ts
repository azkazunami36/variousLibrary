import SumLibrary from "./sumLibrary";

SumLibrary.externalModules.ytdl.getInfo("").then(i => {
    i.videoDetails
})