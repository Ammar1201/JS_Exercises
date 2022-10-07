
function longest(str1, str2) {
  let str = (str1 + str2).split('');
  let tmp = str.filter((c, index) => {
    return str.indexOf(c) === index;
  });
  return tmp.sort().join('');
}

console.log(longest('xyaabbbccccdefww','xxxxyyyyabklmopq'));