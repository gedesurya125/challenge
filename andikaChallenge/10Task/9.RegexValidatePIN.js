const validatePIN = pin => /^\d{4}$|^\d{6}$/.test(pin);


//test
console.log(
  validatePIN("1234")
)