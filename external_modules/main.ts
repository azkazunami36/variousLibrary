import fs from "./fs/main.js";
import ytdl from "./ytdl/main.js";
/**
 * 外部で使われているパッケージです。説明が日本語なので分かりやすい設計になっています。
 * 
 * 他にもオリジナルで追加をしたり、機能性を向上させたり、様々なアレンジが加わっています。
 */
declare module externalModules { export { fs, ytdl } };
export default externalModules
