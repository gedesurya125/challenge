function sumIntervals(intervals){
  //TODO
  const reArr = intervals.slice().sort((a, b) => a[0] - b[0]).reduce((acc, curr) => {
    const outer = checkInside(getLastValueArray(acc), curr);
    const overlap = checkOverlap2ways(getLastValueArray(acc), curr);
    if(outer || overlap){
      acc.pop();
      acc.push(outer || overlap)
    }else {
      acc.push(curr);
    }
    return acc;
  }, [[1,1]]).reduce((acc, curr) => {
    return acc += curr[1] - curr[0]
  }, 0);
  console.log(reArr)
}




//Function -Check if arr2 inside arr1 vice versa
const checkInside = (arr1, arr2) => {
  if(arr1[0]<= arr2[0] && arr1[1] >= arr2[1]) return arr1;
  if(arr2[0]<= arr1[0] && arr2[1] >= arr1[1]) return arr2;
  
}


//Function - Check if arr2 overlaped arr 1 then return [arr1[0], arr2[1]]
const checkOverlap = (arr1, arr2) => {
  if(arr1[0] <= arr2[0] && arr1[1] >= arr2[0] && arr1[1] < arr2[1])return [arr1[0], arr2[1]]; 
}
//Function -  check if arr2 or arr1 overlap each other, if so return merged overlap
const checkOverlap2ways = (arr1, arr2) => {
  if(arr1[0] <= arr2[0] && arr1[1] >= arr2[0] && arr1[1] < arr2[1])return [arr1[0], arr2[1]]; 
  if(arr2[0] <= arr1[0] && arr2[1] >= arr1[0] && arr2[1] < arr1[1])return [arr2[0], arr1[1]]; 
}
// check if arr2 whole over arr1 and return arr2 vice versa
const checkOver = (arr1, arr2) => {
  if(arr1[1] < arr2[0]) return arr2;
  if(arr2[1] < arr1[0]) return arr1;
}

//Remove an array and return new array
const removeItem = (arr, item) => {
  return arr.filter(ar => {
    return !((ar[0] === item[0]) && (ar[1] === item[1]))
  });
}

// Get Last Value Of an Array
const getLastValueArray = (arr) => {
  return arr.slice(-1)[0];
}



// sumIntervals( [
//   [1,2],
//   [6, 10],
//   [11, 15]
// ] ); // => 9

// sumIntervals( [
//   [1,4],
//   [7, 10],
//   [3, 5]
// ] ); // => 7

sumIntervals( [
  [1,5],
  [10, 20],
  [1, 6],
  [16, 19],
  [5, 11]
] ); // => 19


// // Get The Last Array
// arr0 = [[1,3], [1,4], [1,7]];
// console.log(removeItem(arr0, [1,3]))