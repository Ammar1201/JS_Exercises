
//! 

// function tribonacci(sign, n) {
//   if (n == 0) {
//     return [];
//   }

//   let n1 = sign[0], n2 = sign[1], n3 = sign[2];
//   if(n1 === 0 && n2 === 0) {
//     n1 = 0, n2 = 1, n3 = 1;
//     n -= 2;
//   }
//   if(n1 === 1 && n2 === 1) {
//     // n1 = 1, n2 = 1, n3 = 3;
//     n -= 4;
//   }
//   let total = n1 + n2 + n3;
//   for(let i = 0; i < n; i++) {
//     // if(i === 0) {
//     //   total = 3; 
//     // }
//     // else if(i === 1) {
//     //   n1 = 1, n2 = 1, n3 = 3;
//     //   total = 5;
//     // }
//     // else {
//     //   let tmp = n2;
//     //   n2 += n1;
//     //   n3 = n1 + n2;
//     //   n1 = tmp;
//     //   total = n1 + n2 + n3;
//     // }
//     if(i === 0) {
//       n1 = 1, n2 = 1, n3 = 3;
//     }
//     else {
//       let tmp1 = n1, tmp2 = n2;
//       n1 = n2;
//       n2 = n3;
//       n3 = n1 + n2;
//       // n1 = tmp2;
//       total = n1 + n2 + n3;
//     }
//   }
//   return n3;
// }

function tribonacci(signature, n) {
  let trib = signature;
  for (i = 3; i < n; i++) {
    trib.push((trib[i-1] + trib[i-2] + trib[i-3]));
  }
  return trib.slice(0, n);
}

const sign = [0, 0, 1];

console.log(tribonacci(sign, 8));

//* [1, 1 ,1, 3, 5, 9, 17, 31, ...]

//* [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]