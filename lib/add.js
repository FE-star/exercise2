function add(s1, s2) {
  // 实现该函数
    var res = '';
    var digit = 0;
    s1 = s1.split('');
    s2 = s2.split('');
    while (s1.length || s2.length || digit){
        digit += ~~s1.pop() + ~~s2.pop();
        res = digit % 10 + res;
        digit = digit>9;
    }
    return res.replace(/^0+/,'');
}

module.exports = add