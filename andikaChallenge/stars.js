const stars = (count) => {
  for(let i = 1; i <= count; i++){
    let stars = '';
    for(let j = 0; j < i; j++){
      stars += '*'
    };
    console.log(stars);
  }
}

const starsRev = (count) => {
  //adding stars
  let template = '';
  for(let i = 0; i < count; i++){
    template += '*'
  };
  //adding space
  for(let i = count - 1; i >= 0 ; i--){
    let stars = template.slice(i);
    let maskedStars = stars.padStart(count, ' ');
    console.log(maskedStars);
  }
}

// stars(5);
starsRev(10);