
function findUniq(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    if(arr[i] !== arr[i + 1]) {
      if(i === 0) {
        if(arr[i + 1] === arr[i + 2]) {
          return arr[i];
        }
        else {
          return arr[i + 1];
        }
      }
      return arr[i + 1];
    }
  }
}

const arr = [ 1, 0, 0, 0, 0 ];

console.log(findUniq(arr));