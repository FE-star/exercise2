function add(a, b) {
    // 实现该函数
    var aList = a.split('').reverse();
    var bList = b.split('').reverse();
    var cList = [];
    var length = Math.max(aList.length, bList.length);
    var flag = 0;

    for (var i = 0; i < length; i++) {
        var c = (+aList[i] || 0) + (+bList[i] || 0) + flag;
        flag = 0;
        if (c > 9) {
            c -= 10;
            flag = 1;
        }
        cList.push(c);
    }

    if (flag === 1) {
        cList.push(1);
    }

    return cList.reverse().join('');
}

module.exports = add