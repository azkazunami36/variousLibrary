import { path } from "./path/main.js";
import { easyExpress } from "./easyExpress/main.js";

/**
 * 自作で作成した、便利なモジュールです。オリジナルなので、かずなみからすればとても分かりやすいライブラリです。
 */
export default new (class originalModules {
    /**
     * ファイルパス関連のライブラリです。
     * 例を挙げると、拡張子を抽出したり、フォルダかどうかやファイルの保存場所など、様々なデータを取り出すことが出来ます。
     * ファイルリストを取得することも可能です。
     */
    path = path;
    /**
     * これはexpressの設定をかずなみ用に簡略化した、簡単に構築が出来るeasyなexpressです。
     */
    easyExpress = easyExpress;
})();
