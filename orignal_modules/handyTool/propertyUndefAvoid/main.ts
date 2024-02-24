/**
 * オブジェクト内のプロパティ名を参照した際、存在しない場合は初期化して参照します。
 * @param keyName オブジェクト内プロパティ名
 * @param datas オブジェクト
 * @param set 存在しない場合に使用する初期データ
 * @returns
 */
export function propertyUndefAvoid<T>(keyName: string, datas: Record<string, T | undefined>, set: T): T {
    let value = datas[keyName];
    if (value === undefined) {
        value = set;
        datas[keyName] = value;
    }
    return value;
}
