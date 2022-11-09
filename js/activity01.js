class Punto {
  constructor(x, y) {
    this.x = x
    this.y = y

    this.change = (x, y) => {
      this.x = x
      this.y = y
    }
    this.copy = () => {
      return new Punto(this.x, this.y)
    }
    this.equals = that => {
      if (!that instanceof Punto) return false
      return this.x == that.x && this.y == that.y
    }
    this.addition = that => {
      if (!that instanceof Punto) return false
      let x = this.x + that.x
      let y = this.y + that.y
      return new Punto(x, y)
    }
    this.getDistance = that => {
      if (!that instanceof Punto) return false
      let a = Math.abs(this.x - that.x)
      a *= a
      let b = Math.abs(this.y - that.y)
      b *= b
      let ans = Math.sqrt(a+b)

      return ans
    }
    this.toString = () => `(${this.x}, ${this.y})`
  }
}

let p1 = new Punto(-5, 2)
let p2 = p1.copy()
p2.change(6, -3)
console.log(p1.getDistance(p2))
