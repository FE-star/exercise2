function add(a, b) {
  // 实现该函数
  // return Number(a) + Number(b) + ''

  const r1 = a.toString().split('.')[0].length,
    r2 = b.toString().split('.')[0].length,
    m = Math.pow(10, Math.max(r1, r2))

  // return (a * m + b * m) / m + ''
  return (accMul(a, m) + accMul(b, m)) / m + ''
}
module.exports = add


function accMul(a, b) {
  const r1 = a.toString(),
    r2 = b.toString(),
    m = 0
  try {
    m += r1.split('.')[0].length
  } catch (e) {}
  try {
    m += r2.split('.')[0].length
  } catch (e) {}
  return Number(r1.replace(".", "")) * Number(r2.replace(".", "")) / Math.pow(10, m)
}


// js 加减乘除不准

// // 加法：

// function dcmAdd(arg1,arg2){

//     var r1,r2,m; 
//     try{r1=arg1.toString().split(".")[1].length;}catch(e){r1=0;}
//     try{r2=arg2.toString().split(".")[1].length;}catch(e){r2=0;}
//     m=Math.pow(10,Math.max(r1,r2));
//     return (accMul(arg1,m)+accMul(arg2,m))/m;
// }
// // 减法：

// function dcmAdd(arg1,arg2){

//     var r1,r2,m; 
//     try{r1=arg1.toString().split(".")[1].length;}catch(e){r1=0;}
//     try{r2=arg2.toString().split(".")[1].length;}catch(e){r2=0;}
//     m=Math.pow(10,Math.max(r1,r2));
//     return (accMul(arg1,m)-accMul(arg2,m))/m;
// }
// // 乘法：

// function accMul(arg1,arg2){

//     var m=0,s1=arg1.toString(),s2=arg2.toString();
//     try{m+=s1.split(".")[1].length}catch(e){}
//     try{m+=s2.split(".")[1].length}catch(e){}
//     return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)
// }
// // 除法：

// function accDiv(arg1,arg2){

//     var t1=0,t2=0,r1,r2;
//     try{t1=arg1.toString().split(".")[1].length}catch(e){}
//     try{t2=arg2.toString().split(".")[1].length}catch(e){}
//     with(Math){
//         r1=Number(arg1.toString().replace(".",""))
//         r2=Number(arg2.toString().replace(".",""))
//         return (r1/r2)*pow(10,t2-t1);
//     }
// }