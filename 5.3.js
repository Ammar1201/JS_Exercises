
function toCamelCase(str) {
  let tmp = [];
  if(str.includes('-')) {
    tmp = str.split('-');
  }
  else {
    tmp = str.split('_');
  }

  for(let i = 1; i < tmp.length; i++) {
    tmp[i] = tmp[i].charAt(0).toUpperCase() + tmp[i].slice(1);
  }
  return tmp.join('');
}

console.log(toCamelCase('The_Stealth_Warrior'));