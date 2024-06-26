// 他作モジュール・パッケージインポート
import { fs } from "./external_modules/fs/main.js";
import { ytdl } from "./external_modules/ytdl.js";
import { path as externalModulesPath } from "./external_modules/path/main.js";
// 自作モジュールインポート
import { path as originalModulesPath } from "./orignal_modules/path.js";
import { easyExpress } from "./orignal_modules/easyExpress.js";
import { bouyomi } from "./orignal_modules/bouyomi.js";
import { handyTool } from "./orignal_modules/handyTool.js";
import { hiddenLogger } from "./orignal_modules/hiddenLogger.js";
import { contentTypeToExtConvert } from "./orignal_modules/contentTypeToExtConvert.js";
import { stringInterface } from "./orignal_modules/stringInterface.js";
import { sumVPITools } from "./orignal_modules/sumVPITools.js";
import { youtubeSourceManager } from "./orignal_modules/youtubeSourceManager.js";

class externalModulesClass {
    /**
     * node:fsモジュールを使用すると、標準のPOSIX関数に近い方法でファイルシステムを扱うことが出来ます。
     *
     * PromiseベースのAPIを使用するには:
     * ```js
     * import * as fs from "node:fs/promises";
     * ```
     * コールバックAPIと同期APIを使用するには:
     * ```js
     * import * as fs from 'node:fs';
     * ```
     * すべてのファイルシステム操作には、同期、コールバック、Promiseベースの形式があり、CommonJS構文とES6モジュール(ESM)の両方を使用してアクセスできます。
     *
     * @see [source] (https://github.com/nodejs/node/blob/v20.2.0/lib/fs.js)
     */
    fs = fs;
    /**
     * YouTubeのソースを取得するモジュール。ダウンロードや表示、収集が可能です。
     */
    ytdl = ytdl;
    /**
     * `node:path` モジュールは、ファイルとディレクトリを操作するためのユーティリティを提供します。
     * パス。 以下を使用してアクセスできます。
     *
     * ```js
     * const path = require('node:path');
     * ```
     * @see [source](https://github.com/nodejs/node/blob/v20.2.0/lib/path.js)
     */
    path = externalModulesPath;
}
const externalModules: externalModulesClass = new externalModulesClass();
class originalModulesClass {
    /**
     * ファイルパスからフォルダかどうかや拡張子など、様々な情報を取得したり、編集、データ化することが出来るツールです。
     */
    path = originalModulesPath;
    /**
     * 簡単にexpressをセットアップできる、簡易expressです。
     */
    easyExpress = easyExpress;
    /**
     * 棒読みちゃんをリモートで利用するためのクラスです。
     */
    bouyomi = bouyomi;
    /**
     * 小規模の便利ツールを格納しています。
     */
    handyTool = handyTool;
    /**
     * 隠しログ記録ツールです。これはこのライブラリのエラーをログファイルに書き出したり、設定を行うことでターミナルに出力を行うことが出来ます。開発用です。
     */
    hiddenLogger = hiddenLogger;
    /**
     * コンテンツタイプを拡張子から識別します。
     */
    contentTypeToExtConvert = contentTypeToExtConvert;
    /**
     * 文字の操作や管理をするためのツールです。
     */
    stringInterface = stringInterface;
    /**
     * 旧Various Programsをライブラリに組み込みました。
     * SumVPITools (**Sum**wave **V**arious **P**rograms U**I** **I**O **Tools*)です。
     */
    sumVPITools = sumVPITools;
    /**
     * YTDLを利用した、様々なソース、情報、リストなどを管理できる「YouTube Source Manager」です。
     */
    youtubeSourceManager = youtubeSourceManager;
}
const originalModules: originalModulesClass = new originalModulesClass();
class sumLibraryClass {
    /**
     * 外部で使われているパッケージです。説明が日本語なので分かりやすい設計になっています。
     *
     * 他にもオリジナルで追加をしたり、機能性を向上させたり、様々なアレンジが加わっています。
     */
    externalModules = externalModules;
    /**
     * 自作で作成した、便利なモジュールです。オリジナルなので、かずなみからすればとても分かりやすいライブラリです。
     */
    originalModules = originalModules;
}
/**
 * かずなみが作成した、便利なプログラムが集まった、すごくわかりやすいライブラリです。
 */
const sumLibrary: sumLibraryClass = new sumLibraryClass();

export = sumLibrary;
