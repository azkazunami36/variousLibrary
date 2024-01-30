import ytdl from "ytdl-core";

/** URLがYouTubeに存在するかどうかをチェックします。 */
function validateURL(string: string): boolean { return ytdl.validateURL(string) };
export default validateURL;