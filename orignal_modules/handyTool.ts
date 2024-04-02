export class handyTool {
    /**
     * 配列をぐっちゃぐちゃにしたげます。にこっ
     * @param array 配列を入力します。
     * @returns 配列が出力されます。
     */
    static arrayRandom<T>(array: T[]): T[] {
        for (let i = 0; array.length !== i; i++) {
            const rm = Math.floor(Math.random() * i);
            let tmp = array[i];
            array[i] = array[rm];
            array[rm] = tmp;
        }
        return array;
    }
    /**
     * オブジェクト内のプロパティ名を参照した際、存在しない場合は初期化して参照します。
     * @param keyName オブジェクト内プロパティ名
     * @param datas オブジェクト
     * @param set 存在しない場合に使用する初期データ
     * @returns
     */
    static propertyUndefAvoid<T>(keyName: string, datas: Record<string, T | undefined>, set: T): T {
        let value = datas[keyName];
        if (value === undefined) {
            value = set;
            datas[keyName] = value;
        }
        return value;
    }
    /**
     * 待機します。ライブラリでは使用しすぎないでください。IOや高負荷の回避におすすめです。
     * @param time 時間を入力
     */
    static async wait(time: number) {
        await new Promise<void>((resolve) => setTimeout(() => resolve(), time));
    }
}
