
// task 10 ---------------  get another array with just the same values from both arrays

let arr1 = {
   name: 'Person',
   age: 123,
   salary: 1542.33,
   contacts: {
      phone: '112',
      email: 'emaill@domain.com',
   },
   address: 'Moldova',
}
let arr2 = {
   name: 'Person Two',
   age: 123,
   salary: 1542,
   contacts: {
      phone: '113',
      email: 'emaill@domain.com',
   },
   address: 'Belarus',
}
function sameValues(array1, array2) {
   let finalArray = {};
   for (let key in array1) {
      if (typeof (array1[key]) == 'object') {
         for (let item in array1[key]) {
            getSame(array1, array2, key, item, finalArray);
         }
      } else if (array1[key] == array2[key]) {
         finalArray[key] = array1[key];
      }
   }
   return finalArray;
}
console.log(sameValues(arr1, arr2));

function getSame(array1, array2, key, item, finalArray) {
   
   if (array1[key][item] == array2[key][item]) {
      finalArray[key] = {};
      finalArray[key][item] = array2[key][item];
   }
}
// 15 min 