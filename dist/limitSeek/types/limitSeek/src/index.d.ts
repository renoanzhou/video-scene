export declare type LimitType = 'limit-all' | 'limit-not-see';
export interface LimitSeekOptions {
    limitType: LimitType;
    video: HTMLVideoElement;
    /**
     *  自定义初始的记录进度
     */
    timeRecord?: number;
}
export declare class LimitSeek {
    /**
     * video对象
     */
    video: HTMLVideoElement;
    /**
     * 限制类型
     * limit-all 限制所有拖动
     * limit-not-play 没观看的进度禁止拖动
     */
    limitType: LimitType;
    /**
     * 是否开启限制 0不开启 1开启
     */
    private status;
    /**
     * 是否处于限制状态 0不是 1是
     */
    private inLimitStatus;
    /**
     * 记录播放进度
     */
    private timeRecord;
    private disposeTimeUpdate?;
    private disposeSeeked?;
    constructor(options: LimitSeekOptions);
    private limitSeek;
    private handleTimeUpdate;
    private handleSeeked;
    /**
     * 开启限制拖动
     */
    start(): void;
    /**
     * 关闭限制拖动
     */
    stop(): void;
    dispose(): void;
}
