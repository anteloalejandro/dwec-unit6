Array.prototype.mean = function() {
  let sum = this.reduce((acc, value) => acc+value, 0)
  return sum/this.length
}

console.log([1,2,3].mean())
