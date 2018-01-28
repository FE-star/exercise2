function add(a,b) {
  // 实现该函数
  var res='', c=0;
    a = a.split('');
    b = b.split('');
    while (a.length || b.length || c){
      //console.log()
        c += ~~a.pop() + ~~b.pop();
        res = c % 10 + res;
        c = c>9;
    }
    return res.replace(/^0+/,'');
}

module.exports = add