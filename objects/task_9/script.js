
// task 9 ------------ change the keys with the values
const weekDays = {
   'Luni': 'Mo',
   'Marti': 'Tu',
   'Miercuri': 'We',
   'Joi': 'Th',
   'Vineri': 'Fr',
   'Simbata': 'Sa',
   'Duminica': 'Su',
}
function resetObj(weekDays) {
   for (let key in weekDays) {
      weekDays[weekDays[key]] = key;
      delete weekDays[key];
   }
   return  weekDays;
}
console.log(resetObj(weekDays));

// 6min 
