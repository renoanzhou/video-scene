"use strict";function e(e,t,i){return e.addEventListener(t,i),{dispose:function(){e.removeEventListener(t,i)}}}Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(t){var i=this;this.status=0,this.inLimitStatus=0,this.timeRecord=0,this.handleTimeUpdate=function(){var e=i.video.currentTime;i.status&&("limit-not-see"===i.limitType?e-i.timeRecord>1?i.limitSeek():i.timeRecord=e>i.timeRecord?e:i.timeRecord:Math.abs(e-i.timeRecord)<1?i.timeRecord=e:i.limitSeek())},this.handleSeeked=function(){i.status&&(i.inLimitStatus?i.inLimitStatus=0:("limit-not-see"===i.limitType&&i.video.currentTime>i.timeRecord||"limit-all"===i.limitType)&&i.limitSeek())},this.video=t.video,this.limitType=t.limitType||"limit-all",this.video&&"function"==typeof this.video.play&&(this.disposeTimeUpdate=e(this.video,"timeupdate",this.handleTimeUpdate),this.disposeSeeked=e(this.video,"seeked",this.handleSeeked),this.timeRecord="number"==typeof t.timeRecord?t.timeRecord:0)}return t.prototype.limitSeek=function(){this.inLimitStatus=1,this.video.currentTime=this.timeRecord},t.prototype.start=function(){this.status=1},t.prototype.stop=function(){this.status=0},t.prototype.dispose=function(){var e,t;null===(e=this.disposeTimeUpdate)||void 0===e||e.dispose(),null===(t=this.disposeSeeked)||void 0===t||t.dispose()},t}();exports.LimitSeek=t;
//# sourceMappingURL=limitSeek.cjs.js.map