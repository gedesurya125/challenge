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



// TUGAS 1 REFRACTOR ======================
const testRefractor = (num) => {
  const toPrint = [];

  for(let i = num; i > 0; i--){
    let str = '';
    let mask = '';
      if(i < num){
        for(let n = (num - i); n > 0; n--){ // dikali 1
          for(let o = (num-n+1); o > 0; o--){ //repeat 4
            mask += '#'
          }
        }
        str += mask
      }

      for(let j = i; j > 0; j--){
        for(let l = j; l > 0; l--){// repeat j sejumlah j kali (left hand)
          str += j.toString();
        }
      }
      for(let k = 2; k <= i; k++){// repeat k sejumlah k kali (right hand)
        for(let m = k; m > 0; m--){
          str += k.toString();
        }
      }

      // [
      //   '4444333221223334444',
      //   '####33322122333####',
      //   '#######22122#######',
      //   '#########1#########'
      // ]



      str += mask;
    toPrint.push(str);
  }
  console.log(toPrint);
}


// TUGAS 2 REFRACTOR ======================
const test2Refractor = (num) => {
  const toPrint = [];
  for(let i = 1; i <= num; i++){
    let str = '';
    let mask = '';

      if(i > 1){
        for(let n = (i - 1); n > 0; n--){ //lakukan pengulangan di bawah sebanyak n kali
          for(let o = (num-n+1); o > 0; o--){ // ulan # sebanyak o kali (catatan : nilai o berubah tergantung nilai n)
            mask += '#'
          }
        }
        str += mask
      }
      for(let j = i; j <= num ; j++){
        for(let l = (num - j + 1); l > 0; l--){// repeat j sejumlah l kali (left hand)
          str += j.toString();
        }
      }
      for(let k = (num - 1); k >= i; k--){// repeat k sejumlah m kali (right hand)
        for(let m = (num - k + 1); m > 0; m--){
          str += k.toString();
        }
      }
      str += mask; // tambahkan mask di akhir
    toPrint.push(str);
  }
  console.log(toPrint);
}


//======== SIMULATION ==========================
// test(4);
// test2(4);

testRefractor(4);
test2Refractor(4);


