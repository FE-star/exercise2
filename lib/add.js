function add(a, b) {
    let arr1 = a.split('').reverse()
    let arr2 = b.split('').reverse()
    let arr1Len = arr1.length
    let arr2Len = arr2.length
    let maxLen = arr1Len > arr2Len ? arr1Len : arr2Len
    let diffLen = Math.abs(arr1Len - arr2Len)
    let newArr = []
    let temp = 0

    for (var i = 0; i < diffLen; i++) {
        arr1Len > arr2Len ? arr2.push('0') : arr1.push('0')
    }

    for (var k = 0; k < maxLen; k++) {
       let curSum=Number(arr1[k]) + Number(arr2[k])
        if (curSum < 10) {
            newArr.push(curSum + temp)
            temp = 0
        } else {
            newArr.push(curSum - 10 + temp)
            temp = 1
        }
    }
    if (temp === 1) {
        newArr.push('1')
    }
    return newArr.reverse().join('').toString()
}

module.exports = add
