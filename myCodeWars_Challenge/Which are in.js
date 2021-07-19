function inArray(array1,array2){
  //...
  return array1.map(str => {
    let rgx = new RegExp(`${str}`,"gi");
    if(array2.find(str2 => rgx.test(str2)))return str;
  }).sort().filter(data => data !== undefined);
}

["lively", "alive", "harp", "sharp", "armstrong"]

console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))
console.log(inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"]))
