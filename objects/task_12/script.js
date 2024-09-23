
// task 12 --------- get distructuring info from an object

const person = {
   first: 'Alexandr',
   last: 'Zavorotnii',
   company: 'Manchester United FC',
}

function displayName(person) {
   let { first, last, company } = person;
   return `Name: ${first} ${last} , Company: ${company}`;
}
console.log(displayName(person));

// 6min 