function add(a, b) {
    let alen = a.length,
        blen = b.length,
        aArr = a.split(''),
        bArr = b.split(''),
        baseL = 0,
        i = 0,
        resultArr = [],
        calulateArr = [],
        result = '';
    if(alen > blen){
        baseL = alen;
    }else{
        baseL = blen;
    }

    for(i = baseL - 1; i >= 0; i--){
        let aPre = aArr[i] || 0;
        let bPre = bArr[i] || 0;
        let resultPre = parseInt(aPre) + parseInt(bPre);
        resultArr.push(resultPre);
    }

    for(let j = 0, resultL = resultArr.length; j < resultL; j++ ){
        let calulate = '';
        if(resultArr[j] > 10){
            calulate = resultArr[j] % 10;
            calulateArr.push(calulate);
            if(j < (resultL - 1)){
                resultArr[j + 1]++;
            }else{
                calulateArr.push(1);
            }
        }else{
            calulate = resultArr[j];
            calulateArr.push(calulate);
        }
    }
    for(let n = calulateArr.length - 1; n >= 0; n--){
        let lastPre = calulateArr[n];
        result += lastPre;
    }
    return result;
}


module.exports = add