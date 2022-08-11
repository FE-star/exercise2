/**
 * 大整数加法
 * 因为是练习项目不考虑小数、负数等，输入均为不带符号的非负整数
 * @param strNum1
 * @param strNum2
 */

function add(strNum1, strNum2) {
    strNum1 = strNum1.toString()
    strNum2 = strNum2.toString()
    if (!/^[1-9]\d*|0$/.test(strNum1)) {
        throw new Error('strNum1 参数非法')
    }
    if (!/^[1-9]\d*|0$/.test(strNum2)) {
        throw new Error('strNum2 参数非法')
    }
    let len1 = strNum1.length
    let len2 = strNum2.length
    const n = Math.max(len2, len1)

    let result = ""
    let extra = 0
    for (let i=1;i<=n;i++) {
        let n1 = parseInt(strNum1[len1-i], 10) || 0
        let n2 = parseInt(strNum2[len2-i], 10) || 0
        let total = n1 + n2 + extra
        result = total % 10 + result
        extra = total >= 10 ? 1 : 0
    }

    if (extra) {
        result = extra + result
    }

    return result
}

add("843529812342341234", "1")

module.exports = add
