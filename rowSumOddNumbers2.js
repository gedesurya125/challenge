// function rowSumOddNumbers(n) {
//   if(n === 1) return n;
//   //=========================================
//   let arr = [[1]];
//   for (let i = 2; i <= n; i++){
//     const lastArr = arr.slice(-1)[0];
//     // console.log(lastArr)
//     let newArr = []
//     let lasNumb = Number(lastArr[lastArr.length - 1]);
//     for (let j = 0; j < i; j++){
//       lasNumb += 2;
//       newArr.push(lasNumb);
//     }
//     arr.push(newArr);
//   }
//   // console.log(arr);
//   return arr.slice(-1)[0].reduce((acc, cur) => acc+cur)
// }


function rowSumOddNumbers(n){
  
}
console.log(
  rowSumOddNumbers(3)
)