
function mask(str) {
  if(str.length <= 4) {
    return str;
  }

  let tmp = str.split('');

  for(let i = 0; i < tmp.length - 4; i++) {
    tmp[i] = '#';
  }
  
  return tmp.join('');
}

console.log(mask('16585'));