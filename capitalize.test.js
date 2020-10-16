const capitalizeString = require('./capitalize')

test('test for first letter capital', done => {
  capitalizeString('brenda', name => {
    expect(name).toBe('Brenda')
    done()
  })
})
