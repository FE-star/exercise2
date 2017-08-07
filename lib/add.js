function add(a,b) {
  // 实现该函数,对于大数据很有帮助
  var aSplit=a.split('').reverse();
  var bSplit=b.split('').reverse();
  //console.log(aSplit);
  var max=aSplit.length>bSplit.length?aSplit.length:bSplit.length;
  //or var max=Math.max(aSplit.length,bSplit.length);
  var cSplit=[];
  var flag=0;
  for (var i = 0; i <max; i++) {
  		var c=parseInt(aSplit[i])+parseInt(bSplit[i])+flag;
  		flag=0;
  		cSplit.push(c%10);
  		if(c>9){
  			flag=1;
  		}
  	}
  	if(flag===1){
  		cSplit.push(flag);
  	}
  	return cSplit.reverse().join('');
  }
  	module.exports = add