function zero(op) {
  if(typeof op === "undefined") return 0;
  return executeOp(0, op);
}
function one(op) {
  if(typeof op === "undefined") return 1;
  return executeOp(1, op);
}
function two(op) {
  if(typeof op === "undefined") return 2;
  return executeOp(2, op);
}
function three(op) {
  if(typeof op === "undefined") return 3;
  return executeOp(3, op);
}
function four(op) {
  if(typeof op === "undefined") return 4;
  return executeOp(4, op);
}
function five(op) {
  if(typeof op === "undefined") return 5;
  return executeOp(5, op);
}
function six(op) {
  if(typeof op === "undefined") return 6;
  return executeOp(6, op);
}
function seven(op) {
  if(typeof op === "undefined") return 7;
  return executeOp(7, op);
}
function eight(op) {
  if(typeof op === "undefined") return 8;
  return executeOp(8, op);
}
function nine(op) {
  if(typeof op === "undefined") return 9;
  return executeOp(9, op);
}

function plus(a) {
  return ['plus', a];
}
function minus(a) {
  return ['minus', a];
}
function times(a) {
  return ['times', a];
}
function dividedBy(a) {
  return ['dividedBy', a];
}


/**
 * This funtion calculate given thisVal as number with given value from operation[0] as type of operation and operation[1] as second number
 * @param {number} thisVal 
 * @param {[string, number]} operation 
 * @returns
 */
function executeOp (thisVal, operation){
  switch (operation[0]){
    case 'plus' : return thisVal + operation[1];
    case 'minus' : return thisVal - operation[1];
    case 'times' : return thisVal * operation[1];
    case 'dividedBy' : return Math.floor(thisVal / operation[1]);
    default: return;
  }
}

console.log('ini jawabannya', six(dividedBy(seven())))
