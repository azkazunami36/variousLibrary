import ytdl from "ytdl-core";
import interfaceAndTypeDef from "../interfaceAndTypeDef";
export function chooseFormat(format: interfaceAndTypeDef.videoFormat | interfaceAndTypeDef.videoFormat[], options?: interfaceAndTypeDef.chooseFormatOptions): interfaceAndTypeDef.videoFormat | never { return ytdl.chooseFormat(format, options) }
export default chooseFormat;
