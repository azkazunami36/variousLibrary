import ytdl from "ytdl-core";

/** VideoIDがYouTubeに存在するかどうかをチェックします。 */
export function validateID(string: string): boolean | never { return ytdl.validateID(string) };
export default validateID;
