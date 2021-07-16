Array.prototype.sameStructureAs = function (other) {
  // Return 'true' if and only if 'other' has the same
  // nesting structure as 'this'.

  const checkEqual = (arr1, arr2) => {
    if(Array.isArray(arr1) !== Array.isArray(arr2)) return false;
    if((typeof arr1 === 'number' || typeof arr1 === 'string') && (typeof arr2 === 'number' || typeof arr2 === 'string')) return true;
    if(arr1.length !== arr2.length) return false;
    let logic = true;
    for(let i = 0; i < arr1.length ; i++){
      logic = logic && checkEqual(arr1[i], arr2[i])
    }
    return logic;
 
  }

  console.log(checkEqual(this, other))
  return checkEqual(this, other)
  // Note: You are given a function isArray(o) that returns
  // whether its argument is an array.
};


//Test===============================
 // should return true
//  [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
//  [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  
 
//   // should return false 
//  [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
//  [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  
 
 // should return true
//  [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 
 
//  // should return false
//  [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );    


// [1,[1,1]].sameStructureAs([2,[2]]);
// [].sameStructureAs({});
// [1,'[',']'].sameStructureAs(['[',']',1]);


// My test
//  [ [ [ ], [ ] ] ].sameStructureAs( [ [ [], [1] ] ] );    
