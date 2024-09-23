
// task 5 ----------- change object values

function changeObj() {
   let person = {
      name: 'Person',
      age: 123,
      salary: 1542.33,
      contacts: {
         phone: '112',
         email: 'emaill@domain.com',
      },
      address: 'Moldova',
   }
   person.contacts.phone = '+37312345678';
   delete person.address;

   return person;
}
console.log(changeObj());

// 4min
