
function sumLowest2(arr) {
  arr = arr.sort((a,b) => a - b);
  return arr[0] + arr[1];
}

let arr = [5, 4, 7, 2, 10, 1];

console.log(sumLowest2(arr));