
function fibonacci(n) {
  let n1 = 1, n2 = 1, total = 2;
  for(let i = 0; i < n - 3; i++) {
    let tmp = n2;
    n2 += n1;
    n1 = tmp;
    total = n1 + n2;
  }
  return total;
}

console.log(fibonacci(10));