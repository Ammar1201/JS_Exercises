
function peopleOnBus(arr) {
  let total = 0;
  for(let stop of arr) {
    total += stop[0];
    total -= stop[1];
  }

  if(total < 0) {
    total = 0;
  }
  return total;
}

const busStops = [[5, 0], [10, 5], [2, 8], [15, 10], [12, 4]];

const testArr =  [[10,0],[9,1],[8,2],[7,3],[6,4],[5,5],[4,6],[3,7],[2,8],[1,9],[0,9]];

const testArr2 =  [[10,0],[9,1],[8,12],[7,3],[6,4],[5,5],[4,6],[3,7],[2,8],[1,9],[0,9]]; // test for total < 0

console.log(peopleOnBus(busStops));

console.log(peopleOnBus(testArr));

console.log(peopleOnBus(testArr2));