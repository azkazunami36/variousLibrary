import ytdlInter from "../../external_modules/ytdl/interfaceAndTypeDef.js";

interface data {
    /** ユーザーが記録されます。 */
    authors: {
        [authorId: string]: {
            /**
             * YTDLが取得したユーザーデータの全てがここに記録されます。
             */
            authorRawData: ytdlInter.Author,
            /**
             * このユーザーが投稿している動画のIDが保存されます。
             */
            videos: string[]
        }
    }
    videos: {
        [videoId: string]: {
            /**
             * YTDLが取得した動画情報の全てがここに記録されます。
             */
            videoInfoRawData: ytdlInter.MoreVideoDetails,
            
        }
    }
}

export class youtubeSourceManager {
    
}