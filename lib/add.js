function add(a, b) {
    // 实现该函数
    var res = '', c = 0;
    a = a.split('');
    b = b.split('');
    while (a.length || b.length || c) {
        c += ~~a.pop() + ~~b.pop();
        // console.log(c)
        res = c % 10 + res;
        // console.log(res)
        c = c > 9;
    }
    return res.replace(/^0+/, '');
}

module.exports = add