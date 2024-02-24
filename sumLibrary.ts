// 他作モジュール・パッケージインポート
// 自作モジュールインポート
import { path } from "./orignal_modules/path/main.js";
import { easyExpress } from "./orignal_modules/easyExpress/main.js";
import { fs } from "./external_modules/fs/main.js";
import { ytdl } from "./external_modules/ytdl/main.js";

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
     * YouTubeのソースを取得するモジュール
     * ダウンロードや表示、収集が可能です。
     */
    ytdl = ytdl;
}
const externalModules: externalModulesClass = new externalModulesClass();
class originalModulesClass {
    /**
     * ファイルパスからフォルダかどうかや拡張子など、様々な情報を取得したり、編集、データ化することが出来るツールです。
     */
    path = path;
    /**
     * 簡単にexpressをセットアップできる、簡易expressです。
     */
    easyExpress = easyExpress;
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
 * 使い回りが出来、とても便利です。このソース自体を動作させても何も効果はありません。
 * しかし、次のパッケージが確実に入っている必要があります。
 *
 * バージョン: 0.1.2
 */
const sumLibrary: sumLibraryClass = new sumLibraryClass();

export = sumLibrary;
