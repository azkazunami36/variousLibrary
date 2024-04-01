import YTDL from "ytdl";

export class ytdl {
    static filterFormats(formats: videoFormat | videoFormat[], filter?: Filter): videoFormat[] { return YTDL.filterFormats(formats, filter) };
    static version = YTDL.version;
    static validateURL(string: string): boolean { return YTDL.validateURL(string) };
    static validateID(string: string): boolean | never { return YTDL.validateID(string) };
    static getVideoID(string: string): string { return YTDL.getVideoID(string) };
    static getURLVideoID(string: string): string | never { return YTDL.getURLVideoID(string) };
    static getInfo(url: string, options?: getInfoOptions): Promise<videoInfo> { return YTDL.getInfo(url, options) };
    static getBasicInfo(url: string, options?: getInfoOptions): Promise<videoInfo> { return YTDL.getBasicInfo(url, options) };
    static chooseFormat(format: videoFormat | videoFormat[], options?: chooseFormatOptions): videoFormat | never { return YTDL.chooseFormat(format, options) }
}

/** Auto CompleteをTでごまかし、確実に文字列を受け入れるユーティリティ? */
export type ExtendString<T extends string> = T | Omit<string, T>;

/** タイプフィルター */
export type Filter = 'audioandvideo' | 'videoandaudio' | 'video' | 'videoonly' | 'audio' | 'audioonly' | ((format: videoFormat) => boolean);

/** 情報オプション */
export interface getInfoOptions {
    /** 言語 */
    lang?: string;
    /** リクエストコールバック */
    requestCallback?: () => {};
    /** リクエストオプション */
    requestOptions?: {};
}

/** クオリティ選択ガイド */
export type ChooseFormatQuality = 'lowest' | 'highest' | 'highestaudio' | 'lowestaudio' | 'highestvideo' | 'lowestvideo';

/** フォーマット選択オプション */
export interface chooseFormatOptions {
    /** 品質 */
    quality?: ExtendString<ChooseFormatQuality> | number | ExtendString<ChooseFormatQuality>[] | number[];
    /** フィルター */
    filter?: Filter;
    /** フォーマット */
    format?: videoFormat;
}

/** ダウンロードオプション */
export interface downloadOptions extends getInfoOptions, chooseFormatOptions {
    /** レンジ(ファイル範囲指定) */
    range?: {
        /** 開始位置 */
        start?: number;
        /** 終端位置 */
        end?: number;
    };
    begin?: string | number | Date;
    /** ライブバッファ */
    liveBuffer?: number;
    /** ハイウォーターマーク */
    highWaterMark?: number;
    /** IPv6をブロック */
    IPv6Block?: string;
    /** ダウンロードチャンク */
    dlChunkSize?: number;
}

/** 動画フォーマットクオリティガイド */
export type VideoFormatQuality = 'tiny' | 'small' | 'medium' | 'large' | 'hd720' | 'hd1080' | 'hd1440' | 'hd2160' | 'highres';

/** 動画フォーマット設定 */
export interface videoFormat {
    /** Iタグ */
    itag: number;
    /** URL */
    url: string;
    /** MIMEタイプ */
    mimeType?: string;
    /** 動画ビットレート */
    bitrate?: number;
    /** 音声ビットレート */
    audioBitrate?: number;
    /** 横幅 */
    width?: number;
    /** 縦幅 */
    height?: number;
    /** 初期レンジ */
    initRange?: { start: string; end: string };
    /** インデックスレンジ */
    indexRange?: { start: string; end: string };
    lastModified: string;
    /** コンテンツの大きさ */
    contentLength: string;
    /** クオリティ */
    quality: ExtendString<VideoFormatQuality>;
    /** クオリティレベル */
    qualityLabel: '144p' | '144p 15fps' | '144p60 HDR' | '240p' | '240p60 HDR' | '270p' | '360p' | '360p60 HDR'
    | '480p' | '480p60 HDR' | '720p' | '720p60' | '720p60 HDR' | '1080p' | '1080p60' | '1080p60 HDR' | '1440p'
    | '1440p60' | '1440p60 HDR' | '2160p' | '2160p60' | '2160p60 HDR' | '4320p' | '4320p60';
    /** プロテクションレベル */
    projectionType?: 'RECTANGULAR';
    /** フレームレート */
    fps?: number;
    /** アベレージビットレート */
    averageBitrate?: number;
    /** オーディオクオリティ */
    audioQuality?: 'AUDIO_QUALITY_LOW' | 'AUDIO_QUALITY_MEDIUM';
    /** カラーインフォ */
    colorInfo?: {
        primaries: string;
        transferCharacteristics: string;
        matrixCoefficients: string;
    };
    highReplication?: boolean;
    approxDurationMs?: string;
    targetDurationSec?: number;
    maxDvrDurationSec?: number;
    audioSampleRate?: string;
    audioChannels?: number;

    /** ytdl-core独自拡張 */
    container: 'flv' | '3gp' | 'mp4' | 'webm' | 'ts';
    hasVideo: boolean;
    hasAudio: boolean;
    codecs: string;
    videoCodec?: string;
    audioCodec?: string;

    isLive: boolean;
    isHLS: boolean;
    isDashMPD: boolean;
}

/** サムネイル情報 */
export interface thumbnail {
    url: string;
    width: number;
    height: number;
}

/** 字幕トラックシンプルテキスト */
export type CaptionTrackSimpleText = 'Afrikaans' | 'Albanian' | 'Amharic' | 'Arabic' | 'Armenian' | 'Azerbaijani' | 'Bangla' | 'Basque'
    | 'Belarusian' | 'Bosnian' | 'Bulgarian' | 'Burmese' | 'Catalan' | 'Cebuano' | 'Chinese (Simplified)'
    | 'Chinese (Traditional)' | 'Corsican' | 'Croatian' | 'Czech' | 'Danish' | 'Dutch' | 'English'
    | 'English (auto-generated)' | 'Esperanto' | 'Estonian' | 'Filipino' | 'Finnish' | 'French' | 'Galician'
    | 'Georgian' | 'German' | 'Greek' | 'Gujarati' | 'Haitian Creole' | 'Hausa' | 'Hawaiian' | 'Hebrew' | 'Hindi'
    | 'Hmong' | 'Hungarian' | 'Icelandic' | 'Igbo' | 'Indonesian' | 'Irish' | 'Italian' | 'Japanese' | 'Javanese'
    | 'Kannada' | 'Kazakh' | 'Khmer' | 'Korean' | 'Kurdish' | 'Kyrgyz' | 'Lao' | 'Latin' | 'Latvian' | 'Lithuanian'
    | 'Luxembourgish' | 'Macedonian' | 'Malagasy' | 'Malay' | 'Malayalam' | 'Maltese' | 'Maori' | 'Marathi'
    | 'Mongolian' | 'Nepali' | 'Norwegian' | 'Nyanja' | 'Pashto' | 'Persian' | 'Polish' | 'Portuguese' | 'Punjabi'
    | 'Romanian' | 'Russian' | 'Samoan' | 'Scottish Gaelic' | 'Serbian' | 'Shona' | 'Sindhi' | 'Sinhala' | 'Slovak'
    | 'Slovenian' | 'Somali' | 'Southern Sotho' | 'Spanish' | 'Spanish (Spain)' | 'Sundanese' | 'Swahili'
    | 'Swedish' | 'Tajik' | 'Tamil' | 'Telugu' | 'Thai' | 'Turkish' | 'Ukrainian' | 'Urdu' | 'Uzbek' | 'Vietnamese'
    | 'Welsh' | 'Western Frisian' | 'Xhosa' | 'Yiddish' | 'Yoruba' | 'Zulu';

/** 字幕トラック言語コード */
export type CaptionTrackLanguageCode = 'af' | 'sq' | 'am' | 'ar' | 'hy' | 'az' | 'bn' | 'eu' | 'be' | 'bs' | 'bg' | 'my' | 'ca' | 'ceb'
    | 'zh-Hans' | 'zh-Hant' | 'co' | 'hr' | 'cs' | 'da' | 'nl' | 'en' | 'eo' | 'et' | 'fil' | 'fi' | 'fr' | 'gl'
    | 'ka' | 'de' | 'el' | 'gu' | 'ht' | 'ha' | 'haw' | 'iw' | 'hi' | 'hmn' | 'hu' | 'is' | 'ig' | 'id' | 'ga' | 'it'
    | 'ja' | 'jv' | 'kn' | 'kk' | 'km' | 'ko' | 'ku' | 'ky' | 'lo' | 'la' | 'lv' | 'lt' | 'lb' | 'mk' | 'mg' | 'ms'
    | 'ml' | 'mt' | 'mi' | 'mr' | 'mn' | 'ne' | 'no' | 'ny' | 'ps' | 'fa' | 'pl' | 'pt' | 'pa' | 'ro' | 'ru' | 'sm'
    | 'gd' | 'sr' | 'sn' | 'sd' | 'si' | 'sk' | 'sl' | 'so' | 'st' | 'es' | 'su' | 'sw' | 'sv' | 'tg' | 'ta' | 'te'
    | 'th' | 'tr' | 'uk' | 'ur' | 'uz' | 'vi' | 'cy' | 'fy' | 'xh' | 'yi' | 'yo' | 'zu';

/** 字幕トラック */
export interface captionTrack {
    baseUrl: string;
    name: {
        simpleText: ExtendString<CaptionTrackSimpleText>;
    };
    vssId: string;
    languageCode: ExtendString<CaptionTrackLanguageCode>;
    kind: string;
    rtl?: boolean;
    isTranslatable: boolean;
}

/** 音声トラック */
export interface audioTrack {
    captionTrackIndices: number[];
}

/** 翻訳言語 */
export interface translationLanguage {
    languageCode: captionTrack['languageCode'];
    languageName: captionTrack['name'];
}

/** 動画情報 */
export interface VideoDetails {
    /** YouTube管理のVideoID */
    videoId: string;
    /** タイトル */
    title: string;
    /** 短い説明 */
    shortDescription: string;
    /** 動画の長さ */
    lengthSeconds: string;
    /** 検索キーワード */
    keywords?: string[];
    /** YouTube管理のユーザーChannelID */
    channelId: string;
    isOwnerViewing: boolean;
    isCrawlable: boolean;
    /** サムネイル */
    thumbnails: thumbnail[];
    averageRating: number;
    allowRatings: boolean;
    /** 再生回数 */
    viewCount: string;
    /** ユーザー名 */
    author: string;
    /** 非公開動画であるかどうか */
    isPrivate: boolean;
    isUnpluggedCorpus: boolean;
    /** ライブコンテンツであるかどうか */
    isLiveContent: boolean;
}

/** メディア情報 */
export interface Media {
    category: string;
    category_url: string;
    game?: string;
    game_url?: string;
    year?: number;
    song?: string;
    artist?: string;
    artist_url?: string;
    writers?: string;
    licensed_by?: string;
    thumbnails: thumbnail[];
}

/** ユーザー */
export interface Author {
    id: string;
    name: string;
    /** @deprecated 削除予定 */
    avatar: string;
    thumbnails?: thumbnail[];
    verified: boolean;
    user?: string;
    channel_url: string;
    external_channel_url?: string;
    user_url?: string;
    subscriber_count?: number;
}

/** マイクロフォーマットレンダラー */
export interface MicroformatRenderer {
    thumbnail: {
        thumbnails: thumbnail[];
    };
    embed: {
        iframeUrl: string;
        flashUrl: string;
        width: number;
        height: number;
        flashSecureUrl: string;
    };
    title: {
        simpleText: string;
    };
    description: {
        simpleText: string;
    };
    lengthSeconds: string;
    ownerProfileUrl: string;
    ownerGplusProfileUrl?: string;
    externalChannelId: string;
    isFamilySafe: boolean;
    availableCountries: string[];
    isUnlisted: boolean;
    hasYpcMetadata: boolean;
    viewCount: string;
    category: string;
    publishDate: string;
    ownerChannelName: string;
    liveBroadcastDetails?: {
        isLiveNow: boolean;
        startTimestamp: string;
        endTimestamp?: string;
    };
    uploadDate: string;
}

/** ストーリーボード */
export interface storyboard {
    templateUrl: string;
    thumbnailWidth: number;
    thumbnailHeight: number;
    thumbnailCount: number;
    interval: number;
    columns: number;
    rows: number;
    storyboardCount: number;
}

/** チャプター */
export interface Chapter {
    title: string;
    start_time: number;
}

/** さらなるビデオの詳細 */
export interface MoreVideoDetails extends Omit<VideoDetails, 'author' | 'thumbnail' | 'shortDescription'>, Omit<MicroformatRenderer, 'title' | 'description'> {
    /** */
    published: number;
    /** YouTube動画へのリンク */
    video_url: string;
    /** */
    age_restricted: boolean;
    /** 高評価数 */
    likes: number | null;
    /** 低評価数 */
    dislikes: number | null;
    /** メディア情報 */
    media: Media;
    /** ユーザー */
    author: Author;
    /** サムネイル */
    thumbnails: thumbnail[];
    /** */
    storyboards: storyboard[];
    /** */
    chapters: Chapter[];
    /** 説明 */
    description: string | null;
}

/** 動画情報 */
export interface videoInfo {
    iv_load_policy?: string;
    iv_allow_in_place_switch?: string;
    iv_endscreen_url?: string;
    iv_invideo_url?: string;
    iv3_module?: string;
    rmktEnabled?: string;
    uid?: string;
    vid?: string;
    focEnabled?: string;
    baseUrl?: string;
    storyboard_spec?: string;
    serialized_ad_ux_config?: string;
    player_error_log_fraction?: string;
    sffb?: string;
    ldpj?: string;
    videostats_playback_base_url?: string;
    innertube_context_client_version?: string;
    t?: string;
    fade_in_start_milliseconds: string;
    timestamp: string;
    ad3_module: string;
    relative_loudness: string;
    allow_below_the_player_companion: string;
    eventid: string;
    token: string;
    atc: string;
    cr: string;
    apply_fade_on_midrolls: string;
    cl: string;
    fexp: string[];
    apiary_host: string;
    fade_in_duration_milliseconds: string;
    fflags: string;
    ssl: string;
    pltype: string;
    enabled_engage_types: string;
    hl: string;
    is_listed: string;
    gut_tag: string;
    apiary_host_firstparty: string;
    enablecsi: string;
    csn: string;
    status: string;
    afv_ad_tag: string;
    idpj: string;
    sfw_player_response: string;
    account_playback_token: string;
    encoded_ad_safety_reason: string;
    tag_for_children_directed: string;
    no_get_video_log: string;
    ppv_remarketing_url: string;
    fmt_list: string[][];
    ad_slots: string;
    fade_out_duration_milliseconds: string;
    instream_long: string;
    allow_html5_ads: string;
    core_dbp: string;
    ad_device: string;
    itct: string;
    root_ve_type: string;
    excluded_ads: string;
    aftv: string;
    loeid: string;
    cver: string;
    shortform: string;
    dclk: string;
    csi_page_type: string;
    ismb: string;
    gpt_migration: string;
    loudness: string;
    ad_tag: string;
    of: string;
    probe_url: string;
    vm: string;
    afv_ad_tag_restricted_to_instream: string;
    gapi_hint_params: string;
    cid: string;
    c: string;
    oid: string;
    ptchn: string;
    as_launched_in_country: string;
    avg_rating: string;
    fade_out_start_milliseconds: string;
    midroll_prefetch_size: string;
    allow_ratings: string;
    thumbnail_url: string;
    iurlsd: string;
    iurlmq: string;
    iurlhq: string;
    iurlmaxres: string;
    ad_preroll: string;
    tmi: string;
    trueview: string;
    host_language: string;
    innertube_api_key: string;
    show_content_thumbnail: string;
    afv_instream_max: string;
    innertube_api_version: string;
    mpvid: string;
    allow_embed: string;
    ucid: string;
    plid: string;
    midroll_freqcap: string;
    ad_logging_flag: string;
    ptk: string;
    vmap: string;
    watermark: string[];
    dbp: string;
    ad_flags: string;
    html5player: string;
    formats: videoFormat[];
    related_videos: relatedVideo[];
    no_embed_allowed?: boolean;
    player_response: {
        playabilityStatus: {
            status: string;
            playableInEmbed: boolean;
            miniplayer: {
                miniplayerRenderer: {
                    playbackMode: string;
                };
            };
            contextParams: string;
        };
        streamingData: {
            expiresInSeconds: string;
            formats: {}[];
            adaptiveFormats: {}[];
        };
        captions?: {
            playerCaptionsRenderer: {
                baseUrl: string;
                visibility: string;
            };
            playerCaptionsTracklistRenderer: {
                captionTracks: captionTrack[];
                audioTracks: audioTrack[];
                translationLanguages: translationLanguage[];
                defaultAudioTrackIndex: number;
            };
        };
        microformat: {
            playerMicroformatRenderer: MicroformatRenderer;
        };
        videoDetails: VideoDetails;
        playerConfig: {
            audioConfig: {
                loudnessDb: number;
                perceptualLoudnessDb: number;
                enablePerFormatLoudness: boolean;
            };
            streamSelectionConfig: { maxBitrate: string };
            mediaCommonConfig: { dynamicReadaheadConfig: {}[] };
            webPlayerConfig: { webPlayerActionsPorting: {}[] };
        };
    };
    videoDetails: MoreVideoDetails;
}

/** 関連動画 */
export interface relatedVideo {
    id?: string;
    title?: string;
    published?: string;
    /** srtingは削除予定 */
    author: Author | 'string';
    /** @deprecated 削除予定 */
    ucid?: string;
    /** @deprecated 削除予定 */
    author_thumbnail?: string;
    short_view_count_text?: string;
    view_count?: string;
    length_seconds?: number;
    /** @deprecated 削除予定 */
    video_thumbnail?: string;
    thumbnails: thumbnail[];
    richThumbnails: thumbnail[];
    isLive: boolean;
}
