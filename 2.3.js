
function findNextSquare(num) {
  let tmp = Math.sqrt(num);
  if(tmp % 1 !== 0) {
    return -1;
  }
  tmp += 1
  return tmp * tmp;
}

console.log(findNextSquare(144));