// 843529812342341234
// 236124361425345435
function add(a, b) {
  const maxLength = Math.max(a.length, b.length)

  a = a.padStart(maxLength , 0);
  b = b.padStart(maxLength, 0);
  let sum = 0;
  let c = 0;   
  let ret = "";
  for(let i=maxLength-1 ; i>=0 ; i--){
    sum = parseInt(a[i]) + parseInt(b[i]) + c;
    c = Math.floor(sum/10);
    ret = sum%10 + ret;
   }
   if(c == 1){
      ret = "1" + ret;
   }
   return ret;
}

module.exports = add