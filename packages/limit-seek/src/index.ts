import { addDomEvent, DisposeEvent } from '../../utils/event';

export type LimitType = 'limit-all' | 'limit-not-see';

export interface LimitSeekOptions {
  limitType: LimitType;
  video: HTMLVideoElement;
  /**
   *  自定义初始的记录进度
   */
  timeRecord?: number
}

export class LimitSeek {
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
  private status = 0;

  /**
   * 是否处于限制状态 0不是 1是
   */
  private inLimitStatus = 0;

  /**
   * 记录播放进度
   */
  private timeRecord = 0;

  private disposeTimeUpdate?: DisposeEvent;

  private disposeSeeked?: DisposeEvent;

  constructor(options: LimitSeekOptions) {
    this.video = options.video;
    this.limitType = options.limitType || 'limit-all';

    if (!this.video || typeof this.video.play !== 'function') return;

    this.disposeTimeUpdate = addDomEvent(this.video, 'timeupdate', this.handleTimeUpdate);

    this.disposeSeeked = addDomEvent(this.video, 'seeked', this.handleSeeked);

    this.timeRecord = typeof options.timeRecord === 'number' ? options.timeRecord : 0;
  }

  private limitSeek() {
    this.inLimitStatus = 1;
    this.video.currentTime = this.timeRecord;
  }

  private handleTimeUpdate = () => {
    const { currentTime } = this.video;
    if (!this.status) return;

    if (this.limitType === 'limit-not-see') {
      if (currentTime - this.timeRecord > 1) {
        this.limitSeek();
      } else {
        this.timeRecord = currentTime > this.timeRecord ? currentTime : this.timeRecord;
      }
    } else {
      if (Math.abs(currentTime - this.timeRecord) < 1) {
        this.timeRecord = currentTime;
      } else {
        this.limitSeek();
      }
    }
  };

  private handleSeeked = () => {
    if (!this.status) return;

    if (!this.inLimitStatus) {
      if (
        (this.limitType === 'limit-not-see' &&
          this.video.currentTime > this.timeRecord) ||
        this.limitType === 'limit-all'
      ) {
        this.limitSeek();
      }
    } else {
      this.inLimitStatus = 0;
    }
  };

  /**
   * 开启限制拖动
   */
  start() {
    this.status = 1;
  }

  /**
   * 关闭限制拖动
   */
  stop() {
    this.status = 0;
  }

  dispose() {
    this.disposeTimeUpdate?.dispose();
    this.disposeSeeked?.dispose();
  }
}
