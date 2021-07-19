var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  let newStr = [];
  for(let i = 0; i < iterable.length; i++){
    if(iterable[i] !== iterable[i+1]){
      newStr.push(iterable[i]); 
    } 
  }
  return newStr;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD') );
console.log(uniqueInOrder([1,2,2,3,3])  )