
function toWeirdCase(str) {
  let tmp = [];
  let words = [];
  tmp = str.split(' ');

  for(let i = 0; i < tmp.length; i++) {
    let word = tmp[i].split('');
    for(let index = 0; index < word.length; index++) {
      if(index % 2 === 0) {
        word[index] = word[index].toUpperCase();
      }
      else {
        word[index] = word[index].toLowerCase();
      }
    }
    words.push(word.join(''));
  }
  
  return words.join(' ');
}

console.log(toWeirdCase('String'));