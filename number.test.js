test('2 plus 2', () => {
	const value = 2 + 2
	expect(value).toBeGreaterThan(3)
	expect(value).toBeGreaterThanOrEqual(3.5)
	expect(value).toBeLessThan(5)
	expect(value).toBeLessThanOrEqual(4.5)

	//using toBe and toEqual
	expect(value).toBe(4)
	expect(value).toEqual(4)
})

//working with floating numbers we use toBeCloseTo

test('decimal numbers', () => {
	const answer = 0.2 + 1.3
	expect(answer).toBeCloseTo(1.5)
})
