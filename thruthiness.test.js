/* toBeNull - matches only null
    toBeUndefined - matches only undefined
    toBeDefined  - is the opposite of toBeUndefined
    toBeTruthy - matches anything that an if statement treats as true
    toBeFalsy - matches anything that an if statement treats as false
 */

test('null', () => {
	const n = null
	expect(n).toBeNull()
})

test('Zero ', () => {
	const z = 0
	expect(z).toBeDefined()
})
