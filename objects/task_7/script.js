
// task 7 ------------ get function to object

let person = {
   name: 'Person',
   get returnName() {
      return this.name;
   },
   age: 123,
   get returnAge() {
      return this.age;
   },
   salary: 1542.33,
   get returnSalary() {
      return this.salary;
   },
   contacts: {
      phone: '112',
      email: 'emaill@domain.com',
   },
   get returnContacts() {
      return (this.contacts.phone + ' / ' + this.contacts.email);
   },
   address: 'Moldova',
   get returnAdress() {
      return this.address;
   }
}
console.log(person.address);

// 10 min