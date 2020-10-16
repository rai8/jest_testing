const { add, multiply, subtract, divide } = require('./calculator')

test('adding 5 with 6', () => {
  expect(add(5, 6)).toBe(11)
})
test('multiplying 7 with 4', () => {
  expect(multiply(7, 4)).toBe(28)
})
test('subracting 5 from 9', () => {
  expect(subtract(5, 9)).toBe(-4)
})
test('dividing 66 with 11', () => {
  expect(divide(66, 11)).toBe(6)
})
