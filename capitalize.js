const capitalizeString = (name, callback) => {
  callback(name.charAt(0).toUpperCase() + name.slice(1))
}

//console.log(capitalizeString('brenda'))

module.exports = capitalizeString
