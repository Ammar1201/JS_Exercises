
function accum(str) {
  let tmp = '';
  for(let i = 0; i < str.length; i++) {
    tmp += str[i].toUpperCase();
    for(let j = 0; j < i; j++) {
      tmp += str[i].toLowerCase();
    }
    if(i !== str.length - 1) {
      tmp += '-';
    }
  }
  return tmp;
}

console.log(accum('RqaEzty'));