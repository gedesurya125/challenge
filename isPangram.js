// console.log((/a-z/gi).test("abcdefghijklmnopqrstuvwxyz"))
// const str = "abcdefghijklmnopqrstuvwxyz"

function isPangram(string){
  for(let i = 97; i < 123; i++){
    if(!string.toLowerCase().split('').find(chr => chr === String.fromCharCode(i))){
      return false;
    }
  }
  return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."))
// console.log('abc'.charCodeAt(0  ))
// console.log(String.fromCharCode(67))
// console.log(!undefined)