
// task 8 ------------- translate the values from an object

function translate() {
   const weekDays = {
      "Mo": 'Mondaay',
      "Tu": 'Tusday',
      "We": 'Wensday',
      "Th": 'Thersday',
      "Fr": 'Friday',
      "Sa": 'Saturday',
      "Su": 'Sunday',
   }
   let translateArray = ['luni', 'marti', 'miercuri', 'joi', 'vineri', 'simbata', 'duminica'];
   let arrIndex = 0;
   for (let item in weekDays) {
      weekDays[item] = translateArray[arrIndex];
      arrIndex++;
   }
   return weekDays;
}
console.log(translate());
// 10 min