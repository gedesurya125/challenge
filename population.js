function nbYear(p0, percent, aug, p) {
  // your code
let year = 0;
while(p0 < p){
  p0 = p0 + (p0 * percent/100) + aug;
  year += 1;
}
return year;
}
console.log(
  nbYear(1500,5, 100, 5000)
)