import ytdl from "ytdl-core";
import interfaceAndTypeDef from "../interfaceAndTypeDef";
export function filterFormats(formats: interfaceAndTypeDef.videoFormat | interfaceAndTypeDef.videoFormat[], filter?: interfaceAndTypeDef.Filter): interfaceAndTypeDef.videoFormat[] { return ytdl.filterFormats(formats, filter) };
export default filterFormats;
