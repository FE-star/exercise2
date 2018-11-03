function add(numStr1, numStr2) {
    // 实现该函数
    let numArr1 = numStr1.split('')
    let numArr2 = numStr2.split('')
    let sumStr = ''
    let c = 0
    while (numArr1.length || numArr2.length || c) {
        let tmp = ~~numArr1.pop() + ~~numArr2.pop() + c
        sumStr = (tmp % 10) + sumStr
        c = ~~(tmp / 10)
    }
    return sumStr
}

module.exports = add