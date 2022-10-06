
function centuryFromYear(year) {
  if(year / 100 % 1 === 0) {
    return year / 100;
  }
  return Math.floor(year / 100) + 1;
}

console.log(centuryFromYear(1119));