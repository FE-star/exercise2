function add(strOne, strTwo) {
    // 比较两个数长度  短的一方前面补0
    if (strOne.length > strTwo.length) {
        let arr = Array(strOne.length - strTwo.length).fill(0);
        strTwo = arr.join('') + strTwo
    } else if (strOne.length < strTwo.length) {
        let arr = Array(strTwo.length - strOne.length).fill(0);
        strOne = arr.join('') + strOne
    }
    // 字符串转为数组后反转，方便对数组加法运算
    var strOneArr = strOne.split('').reverse()
    var strTwoArr = strTwo.split('').reverse()
    var sign = 0 // 进位标识
    var resultArr = []

    for (let i = 0; i < strOneArr.length; i++) {
        var addResult = Number(strOneArr[i]) + Number(strTwoArr[i]) + sign
        if (addResult >= 10) {
            sign = 1
            resultArr.push(addResult % 10)
            continue
        } else {
            sign = 0
            resultArr.push(addResult)
            continue
        }
    }
    // 最后一位计算完后，有进位，计入进位
    if (sign) {
        resultArr.push(sign)
    }
    return resultArr.reverse().join('')
}

module.exports = add