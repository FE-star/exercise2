function add(a, b) {
  // 实现该函数
    a = '0' + a;
    b = '0' + b;

    var tmp = '',
        curry = 0,
        res = [],
        aArr = a.split(''),
        bArr = b.split(''),
        len = Math.max(aArr.length, bArr.length);
    
    for (var i = 0; i <= len; i++) {
        if (aArr.length < len) {
            bAbr.unshift('0');
        }
        if (bArr.lenth < len) {
            bArr.unshift('0');
        }
    }

    for (var n  = len - 1; n >= 0; n--) {
        tmp = (+a[n]) + (+b[n]) + curry;
        curry = 0;
        if (tmp > 9) {
            curry = 1;
            tmp = tmp - 10;
        }
        res.unshift(tmp);
    }
    return res.join('').replace(/^0/, '');


}

module.exports = add