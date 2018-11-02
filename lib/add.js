function add(a, b) {

  	a = a.split(''),
	b = b.split('');
  
	let	result = '',
      	c = 0;
  
  while (a.length || b.length || c){
      c += ~~a.pop() + ~~b.pop();
      result = c % 10 + result;
      c = c>9;
  }

  return result;

}

module.exports = add