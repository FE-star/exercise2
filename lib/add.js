function zeroPadding (arr, num) {
  for (var i = 0;i < num;i++) {
    arr.unshift('0');
  }
}

function addTwoNum (a, b) {
  if (typeof a !== 'string'
  || typeof b !== 'string') {
    throw new Error('param should be a string!');
  }

  var arrayA = a.split('');
  var arrayB = b.split('');
  var i;

  // 补零
  var maxLength = Math.max(arrayA.length, arrayB.length);
  zeroPadding(arrayA, maxLength - arrayA.length);
  zeroPadding(arrayB, maxLength - arrayB.length);

  // 逐位相加
  var e, result;
  e = result = 0;
  for (i = maxLength - 1;i >= 0;i--) {
    result = Number(arrayA[i]) + Number(arrayB[i]) + e;
    e = 0;

    if (isNaN(result)) {
      throw new Error('one of param not a num!');
    }

    if (result > 10) {
      e = 1;
      result = result - 10;
    }

    arrayA[i] = '' + result;
  }

  // 处理最后进位
  if (e === 1) {
    arrayA.unshift('1');
  }

  return arrayA.join('');
}

function add () {
  var args = [].slice.call(arguments);
  var result = args.shift();

  if (args.length > 0) {
    for (var i = 0;i < args.length;i++) {
      result = addTwoNum(result, args[i]);
    }
  }

  return result;
}

module.exports = add;