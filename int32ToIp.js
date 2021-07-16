function int32ToIp(int32){
  // console.log((int32) & 0xFF)
  const binary = Number(int32).toString(2).padStart(32,0).split('');
  for(let i=8; i< binary.length; i+=8){
    binary.splice(i, 0, '.');
    i++
  }
  return binary.join('').split('.').map(bin => parseInt(bin, 2)).join('.')
}

console.log(int32ToIp(2149583361))