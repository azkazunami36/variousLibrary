import { Author, MoreVideoDetails } from "../external_modules/ytdl.js";

interface data {
    /** ユーザーが記録されます。 */
    authors: {
        [authorId: string]: {
            /**
             * YTDLが取得したユーザーデータの全てがここに記録されます。
             */
            authorRawData: Author;
            /**
             * このユーザーが投稿している動画のIDが保存されます。
             */
            videos: string[];
        };
    };
    videos: {
        [videoId: string]: {
            /**
             * YTDLが取得した動画情報の全てがここに記録されます。
             */
            videoInfoRawData: MoreVideoDetails;
        };
    };
}

export class youtubeSourceManager {}
