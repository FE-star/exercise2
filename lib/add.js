function add() {
  // 实现该函数
  const args = [...arguments].map(arg => String(arg))

  const maxLen = Math.max(...args.map(arg => arg.length)), resultArr = []
  let i = maxLen - 1, carry = 0

  while((i >= 0) || carry) {
  	let added = args.reduce((now, str) => str[i] && (now + Number(str[i])) || now, 0) + carry
  	carry = Math.floor(added / 10);
  	resultArr.push(added % 10)
  	i -= 1
  }

  return resultArr.reverse().join('')
}


module.exports = add