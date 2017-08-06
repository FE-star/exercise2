function add(a,b) {
    //思路1：
    /*var res='',c=0;
    a=a.split('');
    b=b.split('');
    while(a.length||b.length||c){
        c+=~~a.pop() + ~~b.pop();
        res=c%10+res;
        c=c>9;
    }
    console.log('111111',res);
    return res.replace(/^0+/,'');*/
    //思路2：
    a=a.split('').reverse();
    b=b.split('').reverse();
    var c=0;
    var res=[];
    var max=Math.max(a.length,b.length);
    for(var i=0; i<max; i++){
        var tmp=(+a[i]||0) + (+b[i]||0) + c;
        c=0;
        if(tmp>=10){
            tmp-=10;
            c=1;
        }
        res.push(tmp);
    }
    if(c==1){
        res.push(c);
    }
    return res.reverse().join('');
}
module.exports = add;