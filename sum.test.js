const sum = require('./sum')

test('adds 3 + 5 equal to 8', () => {
	expect(sum(3, 5)).toBe(8)
})
