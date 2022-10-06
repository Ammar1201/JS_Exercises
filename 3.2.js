
function peopleOnBus(arr) {
  let total = 0;
  for(let stop of arr) {
    total += stop[0];
    total -= stop[1];
    if(total < 0) {
      total = 0;
    }
  }
  return total;
}

const busStops = [[5, 0], [10, 5], [2, 8], [15, 10], [12, 4]];

console.log(peopleOnBus(busStops));