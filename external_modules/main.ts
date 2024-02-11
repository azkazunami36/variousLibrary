import fs from "./fs/main.js";
import ytdl from "./ytdl/main.js";

/**
 * 外部で使われているパッケージです。説明が日本語なので分かりやすい設計になっています。
 * 
 * 他にもオリジナルで追加をしたり、機能性を向上させたり、様々なアレンジが加わっています。
 */
export default new class externalModules {
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
};
