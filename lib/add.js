function add(x, y) {
  let bigger = x
  let smaller = y

  if (x.length > y.length) {
    bigger = x
    smaller = y
  }

  let i = bigger.length
  let _res = []
  while (i--) {
    let _bigger = Number(bigger[i])
    let _smaller = Number(smaller[i])
    
    _res.push(_bigger + _smaller)
  }
  let res = []
  let temp = 0
  _res.map((item, index) => {
    let _item = item + temp
    if (_item > 9) {
      res.push(_item % 10)
      temp = 1
    } else {
      res.push(_item)
      temp = 0
    }
  })
  if (temp > 0) {res.push(temp)}
  return res.reverse().join('')
}

module.exports = add
                
