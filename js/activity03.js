Map.prototype.reverse = function() {
  let out = new Map()
  this.forEach((value, key) => {
    if (out.has(value))
      out.set(value, out.get(value).concat([key]))
    else
      out.set(value, [key])
  })
  return out
}

let map = new Map()
map.set('hola', 1)
map.set('mundo', 2)
map.set('hello_world', 2)

console.log(map.reverse())
