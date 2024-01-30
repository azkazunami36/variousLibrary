import ytdl from "ytdl-core";

export function getURLVideoID(string: string): string | never { return ytdl.getURLVideoID(string) };
export default getURLVideoID;
