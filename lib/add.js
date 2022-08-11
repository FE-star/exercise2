function addZero (len, str) {
    while (len) {
        len--;
        str = '0' + str;
    }
    return str;
}

function add (x, y) {
    // 实现该函数
    const xLen = x.length;
    const yLen = y.length;
    let carry = 0;
    let result = '';
    const distance = xLen - yLen;
    let maxLen;
    if (distance >= 0) {
        y = addZero(xLen - yLen, y);
        maxLen = xLen;
    }
    if (distance < 0) {
        x = addZero(yLen - xLen, x);
        maxLen = yLen;
    }
    for (let i = maxLen - 1; i >= 0; i--) {
        let res = Number(x[i]) + Number(y[i]) + carry;
        res > 9 ? carry = 1 : carry = 0;
        if (i === 0) {
            result = res.toString() + result;
        } else {
            result = res.toString().slice(-1) + result;
        }
    }
    return result;
}

module.exports = add