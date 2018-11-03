function add(d1,d2) {
  // 实现该函数
    // 如果第一个数较大则交换两个数
    if (d1.length < d2.length) {
        [d1, d2] = [d2, d1];
    }
    // 将两个数转为数组形式
    let [arr1, arr2] = [[...d1].reverse(), [...d2].reverse()];
    // num用作当对应位数相加大于10时做进位
    let num = 0;
    // 循环arr1.length次求和
    for (let i = 0; i < arr1.length; i++) {
        if (arr2[i]) {
            arr1[i] = Number.parseInt(arr1[i]) + Number.parseInt(arr2[i]) + num;
        } else {
            arr1[i] = Number.parseInt(arr1[i]) + num;
        }
        if (arr1[i] >= 10) {
            [arr1[i], num] = [arr1[i] % 10, 1];
        } else {
            num = 0;
        }
    }
    // 如果最后进位为1，则结果前应加1为
    if (num === 1) {
        arr1[arr1.length] = num;
    }
    // 返回结果字符串
    return arr1.reverse().join('');
}

module.exports = add
