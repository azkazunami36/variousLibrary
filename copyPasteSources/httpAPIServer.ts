/**
 * このhttpAPIはpost通信をする時に使用することが出来ます。
 * ```ts
 * const app = express();
 * app.post("*", (req, res) => {
 *   let data = "";
 *   req.on("data", chunk => { data += chunk; });
 *   req.on("end", () => {
 *     const api = new httpAPI(req, res, data);
 *
 *   })
 * });
 * ```
 * 送り先から受信するデータの作成元がhttpAPIClientである場合、この`req` `res` `data`の３つを入力するだけでプログラムの準備が整います。
 * しかしそうでない場合は、APIエラーとして500を返します。エラーを返す方法として、APIは独自のJSON型チェックを行います。
 * @version 0.4.0
 */
export class httpAPI {
    #req: Express.Request;
    #res: Express.Response;
    #data: string;
    /** 準備が完了しているかどうか。Falseの場合全ての関数が無効になります。 */
    #ready = false;
    /** エラーによりクラスの動作を停止しているかどうか。空文字の場合は正常です。 */
    #errorMode = "";
    constructor(
        /** リクエスト */ req: Express.Request,
        /** レスポンス */ res: Express.Response,
        /** APIClientからのJSONデータ */ data: string,
    ) {
        this.#req = req;
        this.#res = res;
        const json = (() => {
            try {
                const json = JSON.parse(data);
                if (typeof json !== "object") return;
                return json as {};
            } catch (e) {
                return undefined
            }
        })();
        if (typeof json === "undefined") return;
        if (!("type" in json)) return;
        if (typeof json.type !== "string") return;
        if (!("apiRequest" in json)) return;
        if (typeof json.apiRequest !== "object") return;
        if (json.apiRequest === null) return;
        json.apiRequest;
        this.#data = data;
    }
}
