function add(a,b) {
    var alist = a.split('').reverse();
    var blist = b.split('').reverse();
    var max = Math.max(alist.length,blist.length)
    var clist = []
    var flag = 0;
    for(var i = 0,l =max; i<l; i++){
        var temp = (+alist[i] || 0) + (+blist[i] || 0) + flag;
        flag  = 0
        if(temp > 9){
            temp -=10
            flag = 1
        }
        clist.push(temp)
    }
    if( flag === 1){
        clist.push(flag)
    }
    return clist.reverse().join('')
}

module.exports = add
