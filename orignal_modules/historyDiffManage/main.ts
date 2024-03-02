export class historyDiffManage {
    /**
     * プログラム案
     * 
     * オリジナルデータを記録しておき、新しいデータを受信すると、オリジナルデータと新しいデータの比較する。
     * 違う部分があった場合、オリジナルデータから新しい部分と違う部分のみを置き換え、そしてオリジナルデータにもともとあったデータだけを「差分」として保存する。
     * 
     * オリジナルデータ
     * ```json
     * {
     *   "test": {
     *     "data": "test",
     *     "createing": "all",
     *     "cros": "none"
     *   },
     *   "mainData": {
     *     "text": false
     *   }
     * }
     * ```
     * 新しいデータ
     * ```json
     * {
     *   "test": {
     *     "data": "test",
     *     "createing": "all",
     *     "cros": "seting"
     *   },
     *   "mainData": {
     *     "text": false
     *   }
     * }
     * ```
     * 差分
     * ```json
     * {
     *   "test": {
     *     "cros": "seting"
     *   }
     * }
     * ```
     * のような形で保存される。
     * 
     * データとして記録するだけのプログラムを最初は構成し、余裕がある場合は、どのような変更が起きていたかの参照が出来るプログラムも開発します。
     */
    idea: undefined
}