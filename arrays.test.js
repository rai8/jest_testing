const shoppingList = require('./array')

test('the shopping list has beer on it', () => {
	expect(shoppingList).toContain('beer')
	//expect(new Set(shoppingList)).toContain('beer')
})
