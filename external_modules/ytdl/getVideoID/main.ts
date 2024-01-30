import ytdl from "ytdl-core"; 

/**  */
export function getVideoID(string: string): string { return ytdl.getVideoID(string) };
export default getVideoID;
