// 他作モジュール・パッケージインポート


// 自作モジュールインポート
import externalModules from "./external_modules/main.js";
import orignalModules from "./orignal_modules/main.js";

/**
 * かずなみが作成した、便利なプログラムが集まった、すごくわかりやすいライブラリです。
 * 使い回りが出来、とても便利です。このソース自体を動作させても何も効果はありません。
 * しかし、次のパッケージが確実に入っている必要があります。
 * - fs
 * - node - 予定
 * - body-parser
 * - discord.js
 * - express
 * - ytdl
 * 
 * バージョン: 0.0.2
 */
declare module SumLibrary { export { externalModules, orignalModules } };
export default SumLibrary;
