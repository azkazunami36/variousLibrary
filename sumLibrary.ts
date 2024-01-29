// 他作モジュール・パッケージインポート


// 自作モジュールインポート
import externalModules from "./external_modules/main";
import orignalModules from "./orignal_modules/main";

/**
* かずなみが作成した、便利なプログラムが集まった、すごくわかりやすいライブラリです。
* 使い回りが出来、とても便利です。このソース自体を動作させても何も効果はありません。
* しかし、次のパッケージが確実に入っている必要があります。
* - fs
* - node - 予定
* - body-parser
* - discord.js
* - express
* 
* バージョン: 0.0.1
*/
const SumLibrary = { externalModules, orignalModules };
/**
* かずなみが作成した、便利なプログラムが集まった、すごくわかりやすいライブラリです。
* 使い回りが出来、とても便利です。このソース自体を動作させても何も効果はありません。
* しかし、次のパッケージが確実に入っている必要があります。
* - fs
* - node - 予定
* - body-parser
* - discord.js
* - express
* 
* バージョン: 0.0.1
*/
declare module "./sumLibrary" { };
export default SumLibrary;
