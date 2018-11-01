function add() {
  // 实现该函数
  var res='', c=0;
  var a = arguments[0].split('');
  var b = arguments[1].split('');
    while (a.length || b.length || c){
        c += ~~a.pop() + ~~b.pop();
        res = c % 10 + res;
        c = c>9;
    }
    return res.replace(/^0+/,'');
}

module.exports = add;