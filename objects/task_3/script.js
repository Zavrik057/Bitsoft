
// task 3 ------------ get multiply numbers in object

let menu = {
   width: 300,
   height: 400,
   padding: 20,
   display: 'flex',
   'align-items': 'center',
}
function multiplyNum(menu) {
   for (let item in menu) {
      if (typeof (menu[item]) == 'number') {
         menu[item] = menu[item] * 2;
      }
   }
   return menu;
}
console.log(multiplyNum(menu));

// 5min 