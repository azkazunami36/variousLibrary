import * as interfaceAndTypeDef from "../events/interfaceAndTypeDef.js"

/**
 * fsモジュールでサポートされているパス
 */
export type PathLike = string | Buffer | URL;
export type PathOrFileDescriptor = PathLike | number;
export type TimeLike = string | number | Date;
export type NoParamCallback = (err: NodeJS.ErrnoException | null) => void;
export type BufferEncodingOption =
    | "buffer"
    | {
        encoding: "buffer";
    };
export interface ObjectEncodingOptions {
    encoding?: BufferEncoding | null | undefined;
}
export type EncodingOption = ObjectEncodingOptions | BufferEncoding | undefined | null;
export type OpenMode = number | string;
export type Mode = number | string;
export interface StatsBase<T> {
    isFile(): boolean;
    isDirectory(): boolean;
    isBlockDevice(): boolean;
    isCharacterDevice(): boolean;
    isSymbolicLink(): boolean;
    isFIFO(): boolean;
    isSocket(): boolean;
    dev: T;
    ino: T;
    mode: T;
    nlink: T;
    uid: T;
    gid: T;
    rdev: T;
    size: T;
    blksize: T;
    blocks: T;
    atimeMs: T;
    mtimeMs: T;
    ctimeMs: T;
    birthtimeMs: T;
    atime: Date;
    mtime: Date;
    ctime: Date;
    birthtime: Date;
}
export interface Stats extends StatsBase<number> { }
export interface StatsFsBase<T> {
    /** Type of file system. */
    type: T;
    /**  Optimal transfer block size. */
    bsize: T;
    /**  Total data blocks in file system. */
    blocks: T;
    /** Free blocks in file system. */
    bfree: T;
    /** Available blocks for unprivileged users */
    bavail: T;
    /** Total file nodes in file system. */
    files: T;
    /** Free file nodes in file system. */
    ffree: T;
}
export interface StatsFs extends StatsFsBase<number> { }

export interface BigIntStatsFs extends StatsFsBase<bigint> { }
export interface StatFsOptions {
    bigint?: boolean | undefined;
}

export type WriteFileOptions =
    | (
        & ObjectEncodingOptions
        & interfaceAndTypeDef.Abortable
        & {
            mode?: Mode | undefined;
            flag?: string | undefined;
            flush?: boolean | undefined;
        }
    )
    | BufferEncoding
    | null;
