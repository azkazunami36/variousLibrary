import fs from "node:fs/promises";

function pathSplit(pathString: string) {
    const pathArray = pathString.split("/");
    const name = pathArray[pathArray.length - 1];
    const splitedName = name.split(".");
    const extension = splitedName.length !== 1 ? splitedName[splitedName.length - 1] : undefined;
    pathArray.pop();
    return {
        name: extension ? name.slice(0, -(extension.length + 1)) : name,
        extension: extension,
        path: pathArray,
    };
}

export class path {
    static async uniformPath(pathString: string) {
        // パス記号や無駄な文字の排除、修正
        const slashReplaceString = pathString.replaceAll("\\", "/");
        const pathArray = slashReplaceString.split("/"); // 「/」で分割
        let pathTmp = ""; // パスを結合し、検査するための一時置き場
        for (let i = 0; i !== pathArray.length; i++) pathTmp += pathArray[i] + (i + 1 !== pathArray.length ? "/" : ""); // パス結合、配列最後はスラッシュを置かない
        if (pathTmp[0] === '"' && pathTmp[pathTmp.length - 1] === '"')
            pathTmp = pathTmp.substring(1, pathTmp.length - 1); // ダブルクォーテーションに囲われているなら除去
        if (pathTmp[0] === "'" && pathTmp[pathTmp.length - 1] === "'")
            pathTmp = pathTmp.substring(1, pathTmp.length - 1); // シングルクォーテーションに囲われているなら除去
        while (pathTmp[pathTmp.length - 1] === " ") pathTmp = pathTmp.slice(0, -1); // 無駄なスペースに囲われているなら除去
        const expType = " ()#~"; // 記号系
        for (let i = 0; i !== expType.length; i++) {
            // macのエスケープ記号を通常の記号に置き換える
            const type = expType[i];
            const exp = new RegExp("\\\\\\" + type, "g"); // 何故か知らんがバックスラッシュを3つおいている
            pathTmp = pathTmp.replace(exp, type); // 置き換え
        }

        // 相対パスの絶対パス化
        console.log(await fs.stat(pathTmp));
        return pathTmp;
    }
    static extensionGet(pathString: string) {
        return pathSplit(pathString).extension;
    }
    static nameGet(pathString: string) {
        return pathSplit(pathString).name;
    }
    static async pathIsFolder(pathString: string) {
        const stats = await fs.stat(pathString);
        return stats.isDirectory();
    }
    static async pathIsFile(pathString: string) {
        const stats = await fs.stat(pathString);
        return stats.isFile();
    }
}
