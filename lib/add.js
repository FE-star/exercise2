function add(x, y) {
let sum=[],
    res=0,
    lenMax=0,
    rs,
    X,
    Y,
    Xlen,
    Ylen,
    rsLen;
while (x.length > 0 || y.length > 0) {
  X=x.substr(-14);
  Y=y.substr(-14);
  Xlen=X.length,
  Ylen=Y.length;
  rs=String(Number(X)+Number(Y)+res);
  lenMax=Math.max(Xlen,Ylen);
  rsLen=rs.length;
  if(rsLen>lenMax){
    rs=rs.substr(1,rsLen-1);
    res=1;
  }else{
    res=0;
  }
  x = x.substr(0, x.length - 14);
  y = y.substr(0, y.length - 14);
  sum.unshift(rs)
}
res==1&&sum.unshift(res)
return sum.join('');
}

module.exports = add
