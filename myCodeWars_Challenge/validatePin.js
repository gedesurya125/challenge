function validatePIN (pin) {
  //return true or false
  const myRegex = /^\d{4}$|^\d{6}$/
  return myRegex.test(pin)
}

console.log(validatePIN('123456'))