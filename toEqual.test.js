// using  toEqual instead of toBe function

test('Object assignment', () => {
	const data = { one: 1 }
	data['two'] = 2
	expect(data).toEqual({ one: 1, two: 2 })
})

test('Adding numbers that are not zero', () => {
	for (let a = 0; a >= 10; a++) {
		for (let b = 0; b >= 10; b++) {
			expect(a + b).not.toBe(0)
		}
	}
})
