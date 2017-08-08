function add(n1, n2) {
    var arr1 = n1.split('').reverse();
    var arr2 = n2.split('').reverse();
    var maxLen = Math.max(arr1.length, arr2.length);
    var flag = 0,
        newArr = [];

    for(var i = 0; i < maxLen; i++){

        var tmp = ((+arr1[i]) || 0) + ((+arr2[i]) || 0) + flag;
        flag = 0;

        if( tmp > 9 ){
            tmp -= 10;
            flag = 1;
        }
        
        newArr.push(tmp);
    }

    if( flag === 1 )  newArr.push('1');

    return newArr.reverse().join('');
}

module.exports = add