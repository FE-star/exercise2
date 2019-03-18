function add(a,b) {
    a = '0' + a;    //加0是因为两个最大的位数相加后可能需要进位
    b = '0' + b;
  
    a.length - b.length > 0 ? (b = Array(a.length - b.length+1).join('0')+b) : (a = Array(b.length - a.length+1).join('0')+a);
 
    a = a.split('');
    b = b.split('');
 
    var temp = '',
        carry = 0,
        res = [];
 
    for(var len=a.length-1, i = len; i >= 0; i--){
        temp = -(-a[i]-b[i]-carry);
        if(temp >= 10){  
            carry = 1;
            res.push((temp + '')[1]);
 
        }else{
            carry = 0;
            res.push(temp);
        }
          
    }
    res = res.reverse().join('').replace(/^0/,'');
    return res;
}

module.exports = add