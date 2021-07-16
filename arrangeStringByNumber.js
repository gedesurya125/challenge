function order(words){
  // ...
  return words.split(' ').sort((a, b) => {
    const regex = /\d/g;
    if(Number(a.match(regex).join('')) < Number(b.match(regex).join(''))){
      return -1
    } else if (Number(a.match(regex).join('')) > Number(b.match(regex).join(''))){
      return 1
    }else{
      return 0
    }
  }).join(' ');
}
// const myRgx = /\d/g;
// const data = 'Sur1ya';

console.log(order(""))