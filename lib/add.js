
function add(a,b) {
  // 实现该函数
    var aList = a.split('').reverse()
    var bList = b.split('').reverse()

    var max = Math.max(aList.length,bList.length)

    var flag = 0,cList = []
    for(var i = 0;i < max;i++){
        var tmp = (+aList[i] || 0 ) + (+bList[i] || 0) + flag
        flag = 0
        if(tmp > 9){
            tmp -= 10
            flag = 1
        }
        cList.push(tmp)
    }
    if(flag === 1){
        cList.push(1)
    }
    //console.log(aList,bList)
    return cList.reverse().join('')
}


module.exports = add