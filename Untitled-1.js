function add(x, y) {
  return x + y
}
console.log(add(6, 9))

const nums = [11, 13, 4, 5, 6, 9]

const sum = nums.reduce((acc, cur) => acc + cur)
const over = nums.filter((num) => num > 10)

over

sum
