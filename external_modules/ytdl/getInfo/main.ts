import ytdl from "ytdl-core";
import interfaceAndTypeDef from "../interfaceAndTypeDef";
/** 情報を取得します。 */
export function getInfo(url: string, options?: interfaceAndTypeDef.getInfoOptions): Promise<interfaceAndTypeDef.videoInfo> { return ytdl.getInfo(url, options) };
export default getInfo;
