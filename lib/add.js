function add(a, b) {
<<<<<<< HEAD
    // 实现该函数
    a = '0' + a;
    b = '0' + b;

    var arrA = a.split(''),
        arrB = b.split(''),
        curry = 0,
        tmp = '',
        len = Math.max(arrA.length, arrB.length),
        res = [];

    for (let i = len - 1; i >= 0; i--) {
        if (arrA.length < len) {
            arrA.unshift('0');
        }
        if (arrB.length < len) {
            arrB.unshift('0');
        }
    }
    for (let n = len - 1; n >= 0; n--) {
        tmp = (+arrA[n]) + (+arrB[n]) + curry;
        // curry = 0
        if (tmp > 9) {
            curry = 1;
            res.unshift((tmp + '')[1]);
        } else {
            curry = 0;
            res.unshift(tmp);
        }
    }
    res = res.join('').replace(/^0/, '');
    console.log(res);
    return res;
=======
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


>>>>>>> a8641e4f2b9088c32309aaf37d6ef2808bf8ea39
}

module.exports = add