// function xMasTree(n){
//   //complete this code
//   const maxWidth = 1 + ((n-1)*2);
//   const chrismastTree = [];
//   const chrismastTrunk = [];
//   for(let i = 1; i <= n; i++){
//     let drawTree = ''
//     let treeLength = i + i - 1;
//     let dashLength = (maxWidth - treeLength)/2;
//     //create first dash
//     for(let k = 0; k < dashLength; k++ ){
//       drawTree += '_'
//     }
//     //create stars
//     for(let j = 0; j < treeLength; j++){
//       drawTree += '#'
//     };

//     //create last dash
//     for(let l = 0; l < dashLength; l++){
//       drawTree += '_'
//     } 
//     // console.log(drawTree)
//     chrismastTree.push(drawTree);
//     if(i === 1){
//       for(let i=0; i < 2; i++){
//         chrismastTrunk.push(drawTree);
//       }
//     }
//   }
//   const tree = chrismastTree.concat(chrismastTrunk);
//   //draw trunk
//   // for(let m=0; m < 2; m++){
//   //   let drawTrunk = '';
//   //   let trunkLength = 1;
//   //   let dashLength = (maxWidth - trunkLength)/2;
//   //   //draw first dash
//   //   for(let i = 0; i < dashLength; i++){
//   //     drawTrunk+= '_'
//   //   }
//   //   drawTrunk += '#'
//   //   for(let i = 0; i < dashLength; i++){
//   //     drawTrunk+= '_'
//   //   }
//   //   console.log(drawTrunk)
//   //   chrismastTree.push(drawTrunk);

//   // }
//   return tree;
// }

const xMasTree = (n) => {
  let arr = [];
  let trunk = [];

  for(let i = 1; i <= n; i++){
    let str = '#'.repeat(i * 2 - 1);
    let strPadding = "_".repeat(n-i);
    let data = strPadding + str + strPadding;
    if(i === 1){
      trunk.push(data,data)
    }
    arr.push(data)
  }
  return[...arr,...trunk]
}
 
console.log(xMasTree(5))

