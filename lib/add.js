function add(a, b) {
    var result = [];

    // 将大数拆分成array，进行逐位相加
    var aList = a.split('').reverse();
    var bList = b.split('').reverse();

    // 进位flag
    var flag = 0;
    var maxLength = Math.max(aList.length, bList.length);

    for (var i = 0; i < maxLength; i++) {
        var sum = (+aList[i] || 0) + (+bList[i] || 0);

        // 进位
        if (flag == 1) {
            sum += 1;
        }

        if (sum >= 10) {
            flag = 1;
            sum -= 10;
        } else {
            flag = 0;
        }

        result.push(sum);
    }

    // 最后一次进位
    if (flag == 1) {
        result.push(1);
    }

    return result.reverse().join('');
}

module.exports = add