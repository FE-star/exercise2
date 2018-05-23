function add() {
  var res='', c=0;
   a = arguments[0].split('');//把传进来的数字进行切割
   b = arguments[1].split('');//把传进来的数字进行切割
   while (a.length || b.length || c){ // a.length、b.length(判断是否已经取完了)
     //c:如果为true则表示有进位 true=1
       c += ~~a.pop() + ~~b.pop();//拿组数最后一位进行 ~~将字符转为数字
       res = c % 10 + res;
       c = c>9;
   }
   return res.replace(/^0+/,''); // 去掉前方的0
}

module.exports = add
