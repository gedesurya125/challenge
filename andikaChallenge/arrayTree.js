//TUGAS 1================================
  //Expected
  // 4444333221223334444
  // ####33322122333####
  // #######22122#######
  // #########1#########
function test(num) {
  const toPrint = [];
  let str = '';
  for (let i = num; i > 0; i--) {
    for (let a = i; a > 0; a--) {
      str += i.toString()
    }
  }

  const rightHand = str.split('').sort((a, b) => a - b);
  rightHand.shift();
  const newPattern = str.concat(rightHand.join(''));
  toPrint.push(newPattern)

  for (let i = num; i > 0; i--) {
    if (i === num) continue;
    const myRegex = new RegExp(`${i + 1}`, "gi")
    let str = toPrint.slice(-1).join('').replace(myRegex, '#');
    toPrint.push(str)
  }

  console.log(toPrint)
  return toPrint;
}



// TUGAS 2 =====================================
  // Tugas 2 angka di balik
  // 1111222334332221111
  // ####22233433222####
  // #######33433#######
  // #########4#########
  function test2(num) {
    const toPrint = [];
    let str = '';
    for (let i = 1; i <= num; i++) {
      for (let a = (num - i); a >= 0; a--) {
        str += i.toString()
      }
    }
  
    const rightHand = str.split('').sort((a, b) => b - a);
    rightHand.shift();
    const newPattern = str.concat(rightHand.join(''));
    toPrint.push(newPattern)
  
    for (let i = 1; i < num; i++) {
      if (i === num) continue;
      const myRegex = new RegExp(`${i}`, "gi")
      let str = toPrint.slice(-1).join('').replace(myRegex, '#');
      toPrint.push(str)
    }
  
    console.log(toPrint)
    return toPrint;
  }



//======== SIMULATION ==========================
test(4);
test2(4);

