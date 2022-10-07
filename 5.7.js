
function shortestWord(str) {
  let tmp = str.split(' ');
  let min = tmp[0].length;

  for(let i = 1; i < tmp.length; i++) {
    min = Math.min(min, tmp[i].length);
  }
  return min;
}

console.log(shortestWord('We s ase'));