function add(numA, numB) {
    // 把numA, numB倒过来
    const arrA = numA.split('').reverse();
    const arrB = numB.split('').reverse();
    const ALen = arrA.length;
    const BLen = arrB.length;
    const cycleLen = Math.max(ALen, BLen);
    let carry = 0;
    let resArr = [];

    // 逐位想加
    for (let i = 0; i < cycleLen; i++) {
        let sum = carry;
        if (i < ALen) {
            sum += parseInt(arrA[i]);
        }
        if (i < BLen) {
            sum += parseInt(arrB[i]);
        }
        resArr.push(sum % 10);
        carry = Math.floor(sum / 10);
    }

    // 注意最后一位溢出的情况
    if (carry !== 0) {
        resArr.push(carry);
    }

    return resArr.reverse().join('');
}

module.exports = add