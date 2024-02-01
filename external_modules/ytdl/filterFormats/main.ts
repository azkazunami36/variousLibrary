import ytdl from "ytdl-core";
import interfaceAndTypeDef from "../interfaceAndTypeDef.js";
export function filterFormats(formats: interfaceAndTypeDef.videoFormat | interfaceAndTypeDef.videoFormat[], filter?: interfaceAndTypeDef.Filter): interfaceAndTypeDef.videoFormat[] { return ytdl.filterFormats(formats, filter) };
export default filterFormats;
