var MAX = Math.pow(2, 53) - 1;
function add(a, b) {
    var a = handleStr(a);
    var b = handleStr(b);
    var resultL = handleResultL(a.numL,b.numL) 
    var resultR = a.numR + b.numR;
    if(resultR === 0){
        resultR = "";
    }
    var result = resultL + resultR;
    return result
}
function handleStr(str){
    //已经假设 str的位数小于32位， 且slice后 numR的值不会导致相加后的值不会增加位数
    var _MAX = MAX - 1;
    var _numL,_numR;
    mLen = 16;
    if(+str > _MAX){
        var sLen = str.length 
        if(sLen > mLen ){
             _numL = str.slice(0, 16)
             _numR = str.slice(16)  
        }
         if(sLen == mLen){
             _numL = _MAX;
             _numR = str.slice(15)
           
        }
        return {numL: +_numL, numR: +_numR}
    }else{
        return {numL: +str, numR:0} 
    }
}
function handleResultL(a,b){
    var resultL = a + b ;
    var resultLStr = resultL + "";
    var result = "" ;
    if( resultL <= MAX){
        result += resultL
    }else{ 
        debugger
        // 16位数和17位数的判断
        // MAX的长度 大于15位拿走， 剩下的相加， 是否为原来位数，是的话直接拼接， 否则 MAX的大于15的位 + 1 
        var num =  resultLStr.length == 16 ? 1 : 2
        var aObj = handleNumL(a,num)
        var bObj = handleNumL(b,num)
        var result_1 = aObj.num_1 + bObj.num_1;
        var result_residue = aObj.num_residue + bObj.num_residue;
        var pre_AresidueLen = (""+aObj.num_residue).length
        var pre_BresidueLen =  (""+bObj.num_residue).length
        var pre_residueLen = Math.max(pre_AresidueLen,pre_BresidueLen)
        if(("" + result_residue).length == pre_residueLen){
            result += "" + result_1 + result_residue
        }else{
            result_1 += 1;
            result += "" + result_1 + result_residue
        }
    }
    return result   
}
function handleNumL(num,sliceNum){
    var numStr = num + ""
    var num_1 = numStr.slice(0,sliceNum)
    var num_residue = numStr.slice(sliceNum)
    return {num_1: +num_1,num_residue: +num_residue}
}

module.exports = add

