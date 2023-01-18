// 全角文字か否か判定
String.prototype.isZenkaku = function() {
  return this.match(/^[^\x01-\x7E\xA1-\xDF]+$/) !== null;
}
// 全角=2,半角=1でカウント
Object.defineProperty(String.prototype, 'byteLength', {
  get: function(){
    // 返却用
    var len = 0;
    // 1文字毎に処理
    this.split('').forEach(function(str, index) {
      // 全角なら
      if(str.isZenkaku() === true) {
        // 2加算
        len += 2;
        // 次ぎの文字へ
        return;
      }
      // 1加算
      len += 1;
    });
    // 返却
    return len;
  }
});
