import pathP from "path";

export class path {
    /**
     * パスの最後の部分を返します。 Unixのbasenameコマンドに似ています。
     * 完全修飾パスからファイル名を抽出するためによく使用されます。
     *
     * @param path 評価するパス。
     * @param suffix サフィックス (オプション)、結果から削除する拡張子。
     * @throws {TypeError} `path` が文字列でない場合、または `ext` が指定されているが文字列ではない場合。
     */
    static basename = pathP.basename;
    /** プラットフォーム固有のファイル区切り文字。";"または":" */
    static delimiter = pathP.delimiter;
    /**
     * パスのディレクトリ名を返します。 Unix の dirname コマンドに似ています。
     *
     * @param path path 評価するパス。
     * @throws {TypeError} 「パス」が文字列でない場合。
     */
    static dirname = pathP.dirname;
    /**
     * 最後の「.」からパスの拡張子を返します。 パスの最後の部分の文字列の終わりまで。 「。」がない場合 パスの最後の部分にある場合、またはパスの最初の文字が「.」である場合は、空の文字列を返します。
     *
     * @param path path 評価するパス。
     * @throws {TypeError} 「パス」が文字列でない場合。
     */
    static extname = pathP.extname;
    /**
     * parse() の逆で、オブジェクトからパス文字列を返します。
     * 
     * @param pathObject 評価するパス。
     */
    static format = pathP.format;
    static isAbsolute = pathP.isAbsolute;
    static join = pathP.join;
    static normalize = pathP.normalize;
    /**
     * format() の逆で、パス文字列からオブジェクトを返します。
     *
     * @param path path 評価するパス。
     * @throws {TypeError} 「パス」が文字列でない場合。
     */
    static parse = pathP.parse;
    static posix = pathP.posix;
    static relative = pathP.relative;
    static resolve = pathP.resolve;
    static sep = pathP.sep;
    static toNamespacedPath = pathP.toNamespacedPath;
    static win32 = pathP.win32;
}
