function add(a,b) {
  // 实现该函数
  console.log(sumStrings(a,b))
  return sumStrings(a,b);
}
function sumStrings(a,b){
    var res='', c=0;
    a = a.split('');
    b = b.split('');
    while (a.length || b.length || c){
        c += ~~a.pop() + ~~b.pop();
        res = c % 10 + res;
        c = c>9;
    }
    return res.replace(/^0+/,'');
}

module.exports = add