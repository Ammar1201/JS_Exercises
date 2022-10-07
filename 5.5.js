
function abbreviate(str) {
  let tmp = str.split(' ');
  if(tmp.length > 1) {
    return `${tmp[0][0].toUpperCase()}.${tmp[1][0].toUpperCase()}`;
  }
  return '';
}

console.log(abbreviate('Patrick Feeney'));