function Computer(
  markup, model,
  max_memory = 4,
  max_capacity = 512,
  inches = 17,
) {
  this.markup = markup+''
  this.model = model+''
  this.max_memory = +max_memory
  this.max_capacity = +max_capacity
  this.inches = +inches

  this.toString = () => {
    return `
      Markup: ${this.markup}
      Model: ${this.model}
      Memory: ${this.max_memory}GB
      Disk Size: ${this.max_capacity}GB
      Screen Size: ${this.inches}" `
  }
}

function Laptop (
  markup, model,
  battery_life = 4,
  max_memory = 4,
  max_capacity = 256,
  inches = 12
) {
  this.battery_life = +battery_life
  this.__proto__ = new Computer(markup, model, max_memory, max_capacity, inches)

  this.toString = () =>
    this.__proto__.toString()+`
      Battery Life: ${this.battery_life}H`
}

let computer = new Computer ('AnteloComputer', 123, 4, 256, 17)
let laptop = new Laptop ('AnteloLaptop', '123')



console.log(computer.toString())
console.log(laptop.toString())
