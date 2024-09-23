
// task 1 ------------ operations with an object

function getObj() {
   let obj = {};
   obj.name = 'John';
   obj.surname = 'Smith';
   obj.name = 'Pete';
   delete obj.name;
   return obj;
}
console.log(getObj());
// 2 min
