//we can use regular expressin for matching

test('there is no I in team ', () => {
	expect('team').not.toMatch(/I/)
})

test('there is stop in Christoph', () => {
	expect('Christopher').toMatch(/stop/)
})
