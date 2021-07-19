var moveZeros = function (arr) {
  // TODO: Program me
  return arr.filter(val => val !== 0).concat(arr.filter(val => val === 0));
}