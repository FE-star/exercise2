function add(a, b) {
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
}

module.exports = add