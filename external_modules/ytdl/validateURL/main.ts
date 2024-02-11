import ytdl from "ytdl-core";

/** URLがYouTubeに存在するかどうかをチェックします。 */
export function validateURL(string: string): boolean { return ytdl.validateURL(string) };
