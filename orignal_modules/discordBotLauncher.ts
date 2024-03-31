import discord from "discord.js";

namespace eventData {
    export interface eventDataV1 {
        version: "1.0.0";
        serverList: {
            [serverId: string]: {};
        };
        userList: {
            [userId: string]: {};
        };
    }
}

/**
 * Discord Bot Launcherです。  
 * オリジナルBotプログラムを起動したり、僕お手製便利Botツールを利用できます。  
 * Tokenなどをセットし、使うプログラムを登録して実行関数を動かすだけで、あとは勝手に作業してくれます。
 */
export class discordBotLauncher {
    constructor(option?: {
        /**
         * イベント発生時、データを記録するかどうかを決めます。
         * 
         * この時点で有効にしていると、Botが参加しているサーバー全ての情報を記録し、そしてチャンネルデータの取得も行われます。同時に検知できるユーザー全てのデータも同時に取得されます。
         * そのため、起動に時間がかかり、CPU使用率が上がる恐れがあります。
         */
        eventMonitoring: boolean;
    }) {}
    /**
     * イベント発生時、データを記録するかどうかを決めます。
     */
    eventMonitoring: boolean = false;
    /**
     * Botのトークンを保存します。
     */
    token?: string;
    /**
     * ここに関数を登録します。例:
     * ```js
     * discordBot.messageEvent = message => {
     *     ...;
     * };
     * ```
     * 何も登録されていないと、Botが自動でメッセージイベントを発生させることはありません。(例外として、イベントの取得を行うことがあります。)
     */
    messageEvent?: (message: discord.Message) => void;
    /**
     * ここに関数を登録します。例:
     * ```js
     * discordBot.interactionEvent = interaction => {
     *     ...;
     * };
     * ```
     * 何も登録されていないと、Botが自動でインタラクションイベントを発生させることはありません。(例外として、イベントの取得を行うことがあります。)
     */
    interactionEvent?: (interaction: discord.Interaction) => void;
    /**
     * Botのイベントやデータの保存場所
     */
    #eventdata?: eventData.eventDataV1;
    /**
     * Botが取得したイベントデータです。
     * 他にも以前から存在するデータなどが収集されており、更新履歴や変化状況、様々な状態を記録、監視したデータが保存されます。
     *
     * 過去に取得した更新履歴などが存在する場合、`eventDataMerge()`で統合を行うことが出来ます。
     * しかし、バージョンが異なる場合は操作を無視する可能性があります。
     */
    get eventData() {
        return this.#eventdata;
    }
    eventDataMerge(data: eventData.eventDataV1) {}
    /**
     * オリジナルBotです。簡単に利用が出来るためおすすめです。
     */
    static botRecommend = {
        /**
         * 音楽Botです。YTDLと連携します。
         * そして、独自のJSONファイルやデータが生成されるオリジナルクラスを利用するため、ルートにキャッシュフォルダが生成されます。
         */
        musicBot: {
            message: (message: discord.Message) => {},
            interaction: (interaction: discord.Interaction) => {}
        },
        /**
         * 簡易認証Botです。データを保存することはなく、全てのデータをDiscord自体に埋め込みます。
         */
        simpleAuth: {
            message: (message: discord.Message) => {},
            interaction: (interaction: discord.Interaction) => {}
        }
    }
}
