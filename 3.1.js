
function nb_year(p0, percent, aug, p) {
  percent /= 100;
  let population = p0 + (p0 * percent) + aug;
  let years = 1;
  while(population < p) {
    let tmp = population;
    population = tmp + (tmp * percent) + aug;
    years += 1;
  }
  return years;
}

console.log(nb_year(1500000, 2.5, 10000, 2000000));