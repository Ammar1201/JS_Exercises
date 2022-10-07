
function repeat_str(str, times) {
  let tmp = '';
  for(let i = 0;i < times; i++) {
    tmp += str;
  }
  return tmp;
}

console.log(repeat_str('hello', 5));