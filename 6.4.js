
function isIsogram(str) {
  str = str.toLowerCase().split('');
  let tmp = str.filter((c, index) => {
    return str.indexOf(c) === index;
  });
  return str.length === tmp.length;
}

console.log(isIsogram('mose'));