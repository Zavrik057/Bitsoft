
// taks 2 -------------- return summ of salaries

function getSalSumm() {
   let salaries = {
      John: 100,
      Ann: 160,
      Pete: 130,
   }
   let summ = 0;
   for (let key in salaries) {
      summ = summ + salaries[key];
   }
   return summ;
}
console.log(getSalSumm());
// 3min