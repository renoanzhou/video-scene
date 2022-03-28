# LimitSeek 限制跳跃组件、限制拖动组件

# 场景/功能
适合在线视频播放的场景，需要限制学员观看行为。
支持两种情况：
- 完全禁止视频跳跃
- 视频未播放区域禁止跳跃(已播放区域可以跳跃)

# 快速接入

### 以umd包为例子
```
const limitCtor = limitSeek.LimitSeek
const limitSeekOptions = {
  limitType: 'limit-all',
  video: videoElement
}

const limit = new limitCtor(limitSeekOptions)

// 开启限制
limit.start();

// 关闭限制
limit.stop();

// 销毁组件
limit.dispose();
```

### 以npm包为例子
```
import { LimitSeek } from 'limit-seek'

const limit = new LimitSeek(limitSeekOptions)

...跟上面一致
```
# API 
```
// 构造函数所需的参数类型说明
type LimitType = 'limit-all' | 'limit-not-see';

interface LimitSeekOptions {
  /**
   *  video dom 对象
   */
  limitType: LimitType;
  /**
   *  video dom 对象
   */
  video: HTMLVideoElement;
  /**
   *  自定义初始的记录进度
   */
  timeRecord?: number
}

```