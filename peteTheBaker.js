function cakes(recipe, available) {
  // TODO: insert code
  const keyRecipe = Object.keys(recipe);
  const ammount = []
  for(let i = 0; i < keyRecipe.length; i++){
    const amm = (available[keyRecipe[i]] ||0)  / recipe[keyRecipe[i]];
    ammount.push(amm);
  }
  // console.log(ammount);
  // console.log(Math.floor(Math.min(...ammount)))
  return Math.floor(Math.min(...ammount));
}


//============ test ====================
// must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});