import fs from "fs";

type LogLevel = "fatal" | "error" | "warn" | "info" | "debug" | "trace" | "none";

interface LoggerJSON {
    jsonReadLogLevel?: LogLevel;
    terminalViewLogLevel?: LogLevel;
    log?: {
        [timeStamp: number]: {
            message: string;
        };
    };
}

export class hiddenLogger {
    /**
     * この隠しログ記録ツールを利用するために、JSONファイルが準備出来ているかどうかを確認します。
     * 手動で作成を行うか、`loggerFileCreate()`でファイルの設置を行う必要があります。
     */
    static loggerFileExistsCheck(/** プログラム名でログJSONの分別を行います。 */ funcName: string) {
        return fs.existsSync("./Various-Library-Cache/Logger/" + funcName + ".json");
    }
    static loggerFileCreate(options?: { jsonReadLogLevel?: LogLevel; terminalViewLogLevel?: LogLevel }) {
        fs.writeFileSync(
            "./Various-Library-Cache/Logger.json",
            JSON.stringify(
                (() => {
                    const json: LoggerJSON = {};
                    if (options) {
                        if (options.jsonReadLogLevel) json.jsonReadLogLevel = options.jsonReadLogLevel;
                        if (options.terminalViewLogLevel) json.terminalViewLogLevel = options.terminalViewLogLevel;
                    }
                    return json;
                })(),
            ),
        );
        return true;
    }
    static loggerFileWrite(type: LogLevel | string, message: string) {}
    /**
     *
     **/
    static jsonGet(/** プログラム名でログJSONの分別を行います。 */ funcName: string) {
        if (!hiddenLogger.loggerFileExistsCheck(funcName)) return;
        return (() => {
            try {
                return JSON.parse(String(fs.readFileSync("./Various-Library-Cache/Logger.json"))) as LoggerJSON;
            } catch (e) {
                return;
            }
        })();
    }

    /**
     * 致命的なエラー。全ての動作が停止するレベルのエラーが発生した際に現れる。システムが停止するため、原因の追究と修正を行う必要がある。
     *
     * このエラーが発生する場合、この隠しログ記録ツールで検出できる可能性は低い。システムが停止してしまうため、保存が行えない可能性がある。
     */
    fatal(message: string) {}
    /**
     * エラー。操作の失敗を表する。動作に影響を及ぼしているため、修正が必要。
     */
    error(message: string) {}
    /**
     * 警告。操作の失敗はしていないが、動作に影響を及ぼすレベルに達しそうな状況下で現れる。対処が必要。
     */
    warn(message: string) {}
    /**
     * 情報。何が起きたかを簡潔に書く。例: 「OO開始。」「OOが進行中。」
     *
     * プログラム内部の詳細を書く場合は`.debug()`を使うことをおすすめする。
     */
    info(message: string) {}
    /**
     * デバッグ情報。システム状況に関する詳細情報を載せることが出来る。
     */
    debug(message: string) {}
    trace(message: string) {}
}
