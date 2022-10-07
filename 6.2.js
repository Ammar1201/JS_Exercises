
function countDuplicates(str) {
  const obj = {};
  str = str.toLowerCase();
  for(let i = 0; i < str.length ; i++) {
    if(obj[str[i]] == undefined) {
      obj[str[i]] = 1;
    }
    else {
      obj[str[i]]++;
    }
  }

  let count = 0;
  for(let letter of Object.values(obj)) {
    if(letter > 1) {
      count += 1;
    }
  }
  return count;
}

console.log(countDuplicates('indivisibility'));