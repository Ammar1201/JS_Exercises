
function binaryToDecimal(binary) {
  binary = binary.join('');
  return parseInt(binary, 2);
}

const arr = [1, 0, 0, 1];

console.log(binaryToDecimal(arr));