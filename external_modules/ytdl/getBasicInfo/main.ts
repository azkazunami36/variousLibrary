import ytdl from "ytdl-core";
import interfaceAndTypeDef from "../interfaceAndTypeDef.js";
export function getBasicInfo(url: string, options?: interfaceAndTypeDef.getInfoOptions): Promise<interfaceAndTypeDef.videoInfo> { return ytdl.getBasicInfo(url, options) };
export default getBasicInfo;
