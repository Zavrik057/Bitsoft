
//fisrt task ------- get response number + strig 
console.log('-----------------------task 1---------------------');

function getNUmberString(number) {
   if (!number >= 1 && number <= 9) {
      return console.log('is not a digit');
   } else {
      let arrOffStrings = ['One', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
      return console.log(`${number} ${arrOffStrings[number - 1]}`);
   }
}
getNUmberString(9);

//5m


console.log('----------------------task 2-------------------------');
// 2 task ----- get summ from an interval

function getSummFromInterval(interval) {
   if (!Array.isArray(interval)) {
      console.log('this is not an object');
   } else if (!interval.length == 2) {
      console.log('this is not an interval');
   } else {
      let summ = 0;
      let count = 0;
      for (let index = interval[0]; index <= interval[1]; index++) {
         if (count == 4) {
            return console.log(`summ : ${summ}`);
         }
         if (index % 2 == 0) {
            //console.log(index);
            summ = summ + index;
            count++;
         }
      }
   }
}
getSummFromInterval([20, 40]);

//10min

console.log('--------------------------task 3------------------------');

// 3 task get the biggest number from 3 input numbers

function getMaximumfromThree(numbers) {
   let max = 0;
   let min = 0
   numbers.forEach((item) => {
      if (max < item) {
         max = item;
      }
      if (min > item) {
         min = item;
      }
   });
   console.log('min number : ' + min);
   console.log('max number ' + max);
}
getMaximumfromThree([5, 10, 7]);

//10 min


console.log('------------------------------------task 4---------');
// task 4 ------- get the word with the first letter big

function ucFirst(string) {
   return console.log(string[0].toUpperCase() + string.split('').slice(1).join(''));
}
ucFirst('module');

//10 min


console.log('-----------------------------------task 5----------');
// 5 task ----------  get value form string;

function extractCurrencyVallue(string) {
   let number = '';
   let numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
   for (let index = 0; index < string.length; index++) {
      if (numberArr.includes(+string[index])) {
         number = number + string[index];
      }
   }
   return console.log(+number);
}
extractCurrencyVallue('£3000');


//15 min

console.log('------------------------------------task 6---------');

// 6 task return value -1 or 0 or 1 or error
console.log(typeof (3));
function getValue(index) {
   if (typeof (index) != 'number') {
      console.log('error');
   } else if (index < 0) {
      console.log(-1);
   } else if (index == 0) {
      console.log(0);
   } else if (index > 0) {
      console.log(1);
   }
}
getValue(0);

//1min

console.log('---------------------------------task 7------------');

// 7 task ------- return if range includes age

function includesAge(age) {
   //first method
   if (age >= 14 && age <= 90) {
      console.log('age belongs to the range');
   } else console.log(`age don't belong to the range`);

   //second method
   if (!(age < 14 && age > 90)) {
      console.log('age belongs to the range');
   } else console.log(`age don't belong to the range`);
}
includesAge(30);
includesAge(10);

console.log('---------------------------------- task 8-----------');

// 2 min

// 8 task --------- examination of password and username

function getResultOfExamination(password, username) {
   let truePassword = 'Password';
   let trueUsername = 'Username';

   if ((password == '' || password == undefined) || (username == '' || username == undefined)) {
      return console.log('validation');
   }
   if (truePassword === password && trueUsername === username) {
      console.log('hello');
   } else if (truePassword !== password) {
      console.log('password is wrong');
   } else if (trueUsername !== username) {
      console.log('username is wrong');
   }
}
getResultOfExamination('Password', 'username');

// 5 min

console.log('------------------------------task 9---------------');

// 9 task ---------- user interaction 

function getPrompt() {
   let username = prompt('write your username');
   if (username) {
      let message = prompt(`hello ${username}, you know something about javascript, yes or no?`);
      if (message == 'yes') {
         alert('great');
         console.log('great!');
      } else if (message == 'no') {
         alert('you can start the learning right now!');
         console.log('you can start the learning right now!');
      }
   }
}
// 7min 

console.log('------------------------------ task 10---------------');

// 10 task ------------  return the dividors

function dividors(number) {
   let startArray = [2, 4, 3, 5, 6, 7, 8, 9];
   let dividorsArray = [1];
   startArray.forEach(item => {
      if (number % item == 0) {
         if (!dividorsArray.includes(item)) {
            dividorsArray.push(item);
         }
         if (!dividorsArray.includes(number / item)) {
            dividorsArray.push(number / item);
         }
      }
   });
   for (let index = 11; Math.pow(index, 2) <= number; index++) {
      if (Math.pow(index, 2) == number) {
         dividorsArray.push(index);
      }
   }
   if (!dividorsArray.includes(number)) {
      dividorsArray.push(number);
   }
   console.log(dividorsArray);
}
dividors(8);

//10 min 

console.log('----------------------------task 1-----------------');

/*============================ Arrays =========================================*/


// 1 task  ----------- console log array

function getConsoleArrays(array) {
   // 1 method
   let arrLog = '';
   for (let index = 0; index < array.length; index++) {
      arrLog = arrLog + array[index] + " ";
   }
   console.log(arrLog);
   /*------------------------------------------------------------------------*/

   let count = 0;
   let arrLogTwo = '';
   while (count < array.length) {
      arrLogTwo = arrLogTwo + array[count] + " ";
      count++;
   }
   console.log(arrLogTwo);
   /*------------------------------------------------------------------------*/

   let countTwo = 0;
   let arrLogThree = '';
   do {
      arrLogThree = arrLogThree + array[countTwo] + ' ';
      countTwo++;
   } while (countTwo < array.length);

   // 2 method 

   let arrLogFour = '';
   for (let index in array) {
      arrLogFour = arrLogFour + array[index] + " ";
   }
   console.log(arrLogFour);

   // 3 method

   let arrLogFive = '';
   for (let item of array) {
      arrLogFive = arrLogFive + item + " ";
   }
   console.log(arrLogFive);

   // 4 method

   let arrLogSix = '';
   array.forEach(item => {
      arrLogSix = arrLogSix + item + " ";
   });
   console.log(arrLogSix);

   // 5 method 

   let arrLogSeven = '';
   array.map(item => {
      arrLogSeven = arrLogSeven + item + " ";
   });
   console.log(arrLogSeven);
}
getConsoleArrays(['name', 'user', 'age']);
// 16min

console.log('-------------------------------task 2--------------');

// task 2 --------- create an array with minimum 10 numbers

function getArrayOfNumbers() {
   let numbersArray = [];
   let number = Math.floor(Math.random() * 100 + 1);
   if (number < 10) {
      number = 10;
   }
   for (let index = 0; index < number; index++) {
      numbersArray.push(Math.floor(Math.random() * 100 + 1));
   }
   console.log(numbersArray);
}
getArrayOfNumbers();

// 7min 

console.log('-----------------------------task 3----------------');

// task 3 ---------- do some operations with an array

function getArraysOperations() {
   let styles = ['djazz', 'bluse'];

   styles.push('rock-n-roll');

   styles.splice(Math.round(styles.length / 2 + Number.EPSILON) - 1, 1, 'classic');

   let firstElem = styles.shift();
   console.log(firstElem);

   styles.unshift('rap', 'reggy');
   console.log(styles);
}
getArraysOperations();

// 7min 

console.log('------------------------------task 4---------------');


// task 4 ------------ get summ of numbers 
function sumInputNumbers() {
   let finalArray = [];
   let message = prompt('enter a number');
   if (+message == `${message}`) {
      finalArray.push(+message);
   }
   while (message != undefined && message != '' && +message == `${message}`) {
      finalArray.push(+message);
      message = prompt('enter a number');
   }
   let finalSumm = finalArray.reduce((previusValue, item) => {
      return previusValue + item;
   }, 0);
   console.log(finalArray);
   console.log(finalSumm);
}

// 15 min

console.log('----------------------------task 5-----------------');

// task 5 -------------- change array due to a function

function convert(fn, array) {
   let fliterStrings = array.filter(item => {
      return fn(item);
   });
   console.log(fliterStrings);
}
convert(fn, [3, 'some', '45', 35]);

function fn(item) {
   if (typeof (item) == 'string') {
      return item;
   }
}
// 10min 

console.log('-----------------------------task 6----------------');


// task 6 --------------- return the array with 3 zero in the middle of array 

function getArray() {
   let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   array.splice(Math.round(array.length / 2 + Number.EPSILON) - 1, 1, 0, 0, 0);
   console.log(array);
}
getArray();

// 4 min

console.log('----------------------------task 7-----------------');


// task 7 -------------- get fragment from array

function extract(indexLeft, indexRight) {
   let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   let finalResult = array.slice(indexLeft, indexRight + 1);
   console.log(finalResult);
}
extract(2, 4);

// 3min 

console.log('------------------------------task 8---------------');

// task 8 --------------- get color index

function checkColor(color) {
   let colors = ['red', 'green', 'blue'];
   if (colors.includes(color)) {
      console.log(colors.indexOf(color));
   } else console.log(-1);
}
checkColor('red');

// 3min 

console.log('-----------------------------task 9----------------');


// 9 task --------------- get filtred array with just numbers

function filter() {
   let array = [1, 'a', 2, null, 3, undefined, 4, {}, 5, 6, 'word', 7, 8, false, 9, 100];
   let filtredArray = array.filter(item => {
      if (typeof (item) == 'number' && item < 10) {
         return item;
      }
   });
   console.log(filtredArray);
}
filter()
// 3 min 

console.log('-----------------------------task 10-----------------');


// task 10 ------------- delete dublicates from array and return sorted array

function uniqueSort() {
   let array = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 0, 0, 5, 9, 0, 1];

   for (let index = 0; index < array.length; index++) {
      if (array.indexOf(array[index]) != index) {
         array.splice(index, 1);
         index--;
      }
   }
   console.log(array.sort((a, b) => a - b));
}
uniqueSort();

// 14min

console.log('------------------------------task 11---------------');


// 11 task ----------------- distructuring assignment array

function distructuringAssignment() {
   let colors = ['white', 'blue', 'yellow', 'black', 'red', 'green'];
   let [firstColor, secondColor, ...otherColors] = colors;
   console.log(firstColor);
   console.log(secondColor);
   console.log(otherColors);
}
distructuringAssignment();

console.log('-----------------------------task 1----------------');

/*====================== Objects =================================================*/

// task 1 ------------ operations with an object

function getObjectOperations() {
   let obj = {};
   obj.name = 'John';
   obj.surname = 'Smith';
   obj.name = 'Pete';
   delete obj.name;
   console.log(obj);
}
getObjectOperations();
// 2 min

console.log('--------------------------task 2-------------------');



// taks 2 -------------- return summ of salaries

function getSalariesSumm() {
   let salaries = {
      John: 100,
      Ann: 160,
      Pete: 130,
   }
   let summ = 0;
   for (let key in salaries) {
      summ = summ + salaries[key];
   }
   console.log(summ);
}
getSalariesSumm();
// 3min

console.log('---------------------------task 3------------------');


// task 3 ------------ get multiply numbers in object

let menu = {
   width: 300,
   height: 400,
   padding: 20,
   display: 'flex',
   'align-items': 'center',
}
function multiplyNumeric(menu) {
   for (let item in menu) {
      if (typeof (menu[item]) == 'number') {
         menu[item] = menu[item] * 2;
      }
   }
   console.log(menu);
}
multiplyNumeric(menu);

// 5min 

console.log('--------------------------task 4-------------------');


// task 4 ---------- get a copy of an object and change the values

function changeValues() {
   let user1 = {
      name: 'User 1',
      age: 123,
   }
   let user2 = Object.assign({}, user1);
   user2.name = 'User 2';
   user2.age = 321;

   console.log(user1);
   console.log(user2);
}
changeValues();

// 5 min

console.log('------------------------task 5---------------------');


// task 5 ----------- change object values

function changeObject() {
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

   console.log(person);
}
changeObject();

// 4min

console.log('--------------------------------task 6----------');


// task 6 ------------- return corect coords

function corectCoords() {
   let coords = [
      { x: 1, y: 2 },
      { x: 3, y: 4 },
      { x: null, y: 4 },
      { x: 3, Y: undefined }
   ];
   let finalArray = coords.filter(item => {
      if (typeof (item.x) == 'number' && typeof (item.y) == 'number') {
         return item;
      }
   });
   console.log(finalArray);
}
corectCoords();

// 5min

console.log('----------------------------task 7-------------------');


// task 7 ------------ get function to object

function objectFunction() {
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
   console.log(person.returnContacts);
}
objectFunction();

// 10 min

console.log('----------------------task 8-----------------------');
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
   console.log(weekDays);
}
translate();
// 10 min

console.log('----------------------------------task 9-----------');


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
function resetObject(weekDays) {
   for (let key in weekDays) {
      weekDays[weekDays[key]] = key;
      delete weekDays[key];
   }
   console.log(weekDays);
}
resetObject(weekDays);

// 6min 

console.log('-----------------------------------task 10----------');


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
   console.log(finalArray);
}
sameValues(arr1, arr2);

function getSame(array1, array2, key, item, finalArray) {
   console.log(key + " " + item);
   console.log(array1[key][item]);
   if (array1[key][item] == array2[key][item]) {
      finalArray[key] = {};
      finalArray[key][item] = array2[key][item];
   }
}
// 15 min 

console.log('--------------------------------task 11-------------');


// task 11 ------------ get array with students

function getStudentsArray(numberOfStudents) {
   let catalog = [
      ['Maxim', [8, 8, 10, 10, 9]],
      ['Andrei', [2, 4, 5, 6, 7]],
      ['Martin', [2, 4, 5, 5, 6, 10]],
      ['Ana', [4, 5, 6, 8, 8, 7]],
      ['Oleg', [10, 7, 8, 9, 9, 9]],
   ];
   const students = [];

   for (let index = 0; index < catalog.length; index++) {
      students.push({ name: catalog[index][0], marks: catalog[index][1] });
   }
   getMediaMarks(students);

   TheSmallestMarks(getMediaMarks(students));

   MaxAndMinMark(getMediaMarks(students));

   sortStudents(getMediaMarks(students));

   BetterThanMedia(getMediaMarks(students));

   //console.log(students);

}
getStudentsArray();

// function 1 

function getMediaMarks(students) {
   let mediaCatalog = {};
   for (let index = 0; index < students.length; index++) {

      let currentMarks = students[index].marks;
      let mediaMark = (currentMarks.reduce((previous, item) => { return previous + item }, 0) / currentMarks.length).toFixed(2);

      mediaCatalog[students[index].name] = mediaMark;
      console.log(mediaCatalog);
   }
   return mediaCatalog;
}


// function 2

function TheSmallestMarks(mediaCatalog) {
   for (let name in mediaCatalog) {
      if (mediaCatalog[name] < 5) {
         console.log(name + ' ' + mediaCatalog[name]);
      }
   }
}

// function 3

function MaxAndMinMark(mediaCatalog) {
   let minMark = 10;
   let maxMark = 0;

   for (let name in mediaCatalog) {
      if (mediaCatalog[name] > maxMark) {
         maxMark = mediaCatalog[name];
      }
      if (mediaCatalog[name] < minMark) {
         minMark = mediaCatalog[name];
      }
   }
   console.log(minMark);
   console.log(maxMark);
}

// function 4 

function sortStudents(mediaCatalog) {
   let stArray = [];
   let sortedCatalog = {};
   for (let name in mediaCatalog) {
      let arr = [];
      arr.push(name, mediaCatalog[name]);
      stArray.push(arr);
   }
   console.log(stArray.sort((a, b) => b[1] - a[1]));

   for (let index = 0; index < stArray.length; index++) {
      sortedCatalog[stArray[index][0]] = stArray[index][1];
   }
   console.log('sorted');
   console.log(sortedCatalog);
}

// function 5

function BetterThanMedia(mediaCatalog) {
   let classMedia = 0;
   let count = 0
   for (let name in mediaCatalog) {
      classMedia = classMedia + +mediaCatalog[name];
      count++;
   }
   classMedia = (classMedia / count).toFixed(2);
   for (let name in mediaCatalog) {
      if (+mediaCatalog[name] > classMedia) {
         console.log(`${name} : ${mediaCatalog[name]}`);
      }
   }
}

// 1 hour

console.log('--------------------------------task 12-------------');


// task 12 --------- get distructuring info from an object

const person = {
   first: 'Alexandr',
   last: 'Zavorotnii',
   company: 'Manchester United FC',
}

function displayName(person) {
   let { first, last, company } = person;
   console.log(`Name: ${first} ${last} , Company: ${company}`);
}
displayName(person);

// 6min 

console.log('-----------------------------task 1----------------');

/*============================ Date and time ========================================*/

// task 1 ---------- get current date

function curDay(separator) {
   let date = new Date();

   let day = date.getDate();
   let month = date.getMonth();
   let year = date.getFullYear();

   console.log(day + separator + month + separator + year);
}
curDay('-');

// 4min 

console.log('------------------------------task 2---------------');


// task 2 ------------- get days in a month 

function getDaysInMonth(month, year) {
   let date = new Date(year, month, 0);
   console.log(date);

   console.log(date.getDate());
}
getDaysInMonth(2, 2024);

// 10 min 

console.log('-----------------------------task 3----------------');


// task 3 ------------- get the name of month

function getNameOfMonth(date) {
   let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Auth', 'September', 'October', 'November', 'December'];
   let dateMonth = date.getMonth();

   console.log(months[dateMonth]);
}
getNameOfMonth(new Date('02.20.2020'));

// 6min 

console.log('----------------------------task 4-----------------');


// task 4 -------------- date comparison

function dateComparison(date1, date2) {
   if (date1 > date2) {
      console.log('date1 > date2');
   } else if (date2 > date1) {
      console.log('date2 > date1');
   } else console.log('date1 = date2');
}
dateComparison(new Date(3, 13, 2020), new Date(3, 13, 2020));

// 6min 

console.log('-----------------------------task 5----------------');


// task 5 --------------- conversion of minutes in hours and minutes

function conversionOfMinutes(minutes) {
   let hours = Math.floor(minutes / 60);
   let finalMinutes = minutes % 60;

   console.log(`${minutes} minutes: ${hours} hours(s) and ${finalMinutes} minute(s)`);
}
conversionOfMinutes(340);

// 6min 

console.log('-----------------------------task 6----------------');


// task 6 ------------- get age of a perosn

function getAge(birthDate) {
   let dateNow = new Date();

   let years = dateNow.getFullYear() - birthDate.getFullYear();
   let months = Math.abs(dateNow.getMonth() - birthDate.getMonth());
   let days = Math.abs(dateNow.getDate() - birthDate.getDate());

   console.log(years + ' years');
   console.log(months + ' months');
   console.log(days + ' days');
}
getAge(new Date(2006, 3, 1));

// 25 min 

console.log('----------------------------task 7-----------------');


// task 7 -------------- add specified years to a date

let dt = new Date(2025, 10, 2);

function add_Years(dt, years) {
   dt.setFullYear(dt.getFullYear() + years);
   return dt;
}
console.log(add_Years(dt, 13).toString());

// 7 min 

console.log('--------------------------task 8-------------------');


// task 8 -------------- create clocks on the page

function createClocks() {
   let clockBlock = document.createElement('div');
   clockBlock.classList.add('clock-block');

   let clockBlockStyles = {
      "width": '100%',
      'padding': '50px',
      'align-items': 'center',
      'display': 'flex',
      'flex-direction': 'column',
      'gap': '20px',
   }

   for (let css in clockBlockStyles) {
      clockBlock.style[css] = clockBlockStyles[css];
   }

   let timer = document.createElement('div');
   timer.classList.add('timer');

   timer.style['display'] = 'inline-block';
   timer.style['font-size'] = '30px';

   let timerHours = document.createElement('span');
   let timerMinutes = document.createElement('span');
   let timerSeconds = document.createElement('span');

   timerHours.classList.add('timer__hours');
   timerMinutes.classList.add('timer__minutes');
   timerSeconds.classList.add('timer__seconds');

   timerHours.style['color'] = 'red';
   timerMinutes.style['color'] = 'green';
   timerSeconds.style['color'] = 'blue';

   let wrapper = document.querySelector('.wrapper');
   wrapper.append(clockBlock);
   wrapper.style['width'] = '100%';
   wrapper.style['min-height'] = '100vh';
   wrapper.style['top'] = '0';
   wrapper.style['left'] = '0';

   clockBlock.append(timer);

   timer.append(timerHours);
   timer.append(timerMinutes);
   timer.append(timerSeconds);

   timerHours.after(':');
   timerMinutes.after(':');

   let timerSpans = timer.children;
   for (let index = 0; index < timerSpans.length; index++) {
      timerSpans[index].style['display'] = 'inline-block';
   }
   let date = new Date();

   if (date.getSeconds() < 10) {
      timerSeconds.innerHTML = `0${date.getSeconds()}`;
   } else timerSeconds.innerHTML = date.getSeconds();

   if (date.getMinutes() < 10) {
      timerMinutes.innerHTML = `0${date.getMinutes()}`;
   } else timerMinutes.innerHTML = date.getMinutes();

   if (date.getHours() < 10) {
      timerHours.innerHTML = `0${date.getHours()}`;
   } else timerHours.innerHTML = date.getHours();

   let buttonsRow = document.createElement('div');
   buttonsRow.classList.add('buttons-row');
   buttonsRow.style['display'] = 'flex';
   buttonsRow.style['justify-content'] = 'center';
   buttonsRow.style['align-items'] = 'center';
   buttonsRow.style['gap'] = '10px';

   clockBlock.append(buttonsRow);

   let buttonStyles = {
      'padding': '10px 20px',
      'background': 'lightgrey',
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'color': 'white',
      'font-size': '20px',
      'border-radius': '10px',
      'cursor': 'pointer',
   }

   for (let index = 0; index < 2; index++) {
      let button = document.createElement('div');
      button.classList.add('button');

      for (let css in buttonStyles) {
         button.style[css] = buttonStyles[css];
      }
      buttonsRow.append(button);
   }
   let startButton = document.querySelectorAll('.button')[0];
   startButton.innerText = 'Start';

   let stopButton = document.querySelectorAll('.button')[1];
   stopButton.innerText = 'Stop';

   let timeAdd;
   function getTime() {
      timeAdd = setInterval(() => {
         let date = new Date();

         if (date.getSeconds() < 10) {
            timerSeconds.innerHTML = `0${date.getSeconds()}`;
         } else timerSeconds.innerHTML = date.getSeconds();

         if (date.getMinutes() < 10) {
            timerMinutes.innerHTML = `0${date.getMinutes()}`;
         } else timerMinutes.innerHTML = date.getMinutes();

         if (date.getHours() < 10) {
            timerHours.innerHTML = `0${date.getHours()}`;
         } else timerHours.innerHTML = date.getHours();

      }, 1000);
      return timeAdd;
   }
   getTime();

   startButton.addEventListener('click', (event) => {
      getTime();
   });
   stopButton.addEventListener('click', (event) => {
      clearInterval(timeAdd);
   });
}
createClocks();


// 40 min 

console.log('---------------------task 9------------------------');

// task 9 create a timer by the intermediate of inputs

function getTimer() {
   let inputSeconds = document.querySelector('.input__seconds');
   let inputHours = document.querySelector('.input__hours');
   let inputMinutes = document.querySelector('.input__minutes');

   let timer = document.createElement('div');
   timer.classList.add('timer');

   let timerHours = document.createElement('div');
   timerHours.classList.add('timer__hours');

   let timerMinutes = document.createElement('div');
   timerHours.classList.add('timer__minutes');

   let timerSeconds = document.createElement('div');
   timerHours.classList.add('timer__seconds');

   timer.append(timerHours);
   timerHours.after(':');
   timer.append(timerMinutes);
   timerMinutes.after(':');
   timer.append(timerSeconds);

   let timerStyles = {
      'width': '100%',
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'font-size': '30px',
   }

   for (let css in timerStyles) {
      timer.style[css] = timerStyles[css];
   }

   let timerButton = document.createElement('div');
   timerButton.classList.add('timer__button');

   let timerButtonStyles = {
      'min-width': '100px',
      'min-height': '50px',
      'padding': '10px',
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'background': 'whitesmoke',
      'border-radius': '10px',
      'color': 'black',
      'font-size': '20px',
   };

   for (let css in timerButtonStyles) {
      timerButton.style[css] = timerButtonStyles[css];
   }
   timerButton.innerText = 'Get timer';

   let inputsblock = document.querySelector('.inputs');
   inputsblock.append(timerButton);

   let secconds = 0;
   let minutes = 0;
   let hours = 0;


   timerButton.addEventListener('click', (event) => {
      secconds = +inputSeconds.value;
      minutes = +inputMinutes.value;
      hours = +inputHours.value;
      inputsblock.append(timer);

      console.log(inputSeconds.value);
      console.log(inputMinutes.value);
      console.log(inputHours.value);

      timerHours.innerHTML = '00';
      timerMinutes.innerHTML = '00';
      timerSeconds.innerHTML = '00';

      let timerCount = new Date();
      if (hours == '') {
         timerCount.setHours(0);
      } else {
         timerCount.setHours(hours);
      }

      if (minutes == '') {
         timerCount.setMinutes(0);
      } else {
         timerCount.setMinutes(minutes);
      }

      if (secconds == '') {
         timerCount.setSeconds(0);
      } else {
         timerCount.setSeconds(secconds);
      }

      let isTime = setInterval(() => {

         if (timerCount.getHours() == 0 && timerCount.getMinutes() == 0 && timerCount.getSeconds() == 0) {
            clearInterval(isTime);
         }

         if (timerCount.getHours() < 10) {
            timerHours.innerHTML = `0${timerCount.getHours()}`;
         } else {
            timerHours.innerHTML = timerCount.getHours();
         }

         if (timerCount.getMinutes() < 10) {
            timerMinutes.innerHTML = `0${timerCount.getMinutes()}`;
         } else {
            timerMinutes.innerHTML = timerCount.getMinutes();
         }

         if (timerCount.getSeconds() < 10) {
            timerSeconds.innerHTML = `0${timerCount.getSeconds()}`;
         } else {
            timerSeconds.innerHTML = timerCount.getSeconds();
         }

         timerCount.setSeconds(timerCount.getSeconds() - 1);
      }, 1000);

   });
}
getTimer();

// 1 hour

console.log('-----------------------------task 1----------------');

/*================================= Json =====================================*/

// task 1 ---------- converting of an array to JSON

function get_JSON_Array() {
   const names = ['james', 'jake'];
   console.log(JSON.stringify(names));
}
get_JSON_Array();

// 1min 

console.log('---------------------------task 2------------------');


// task 2 --------- converting Object to JSON

function get_JSON_Object() {
   const power = { voltage: 250, current: 12 };
   console.log(JSON.stringify(power));
}
get_JSON_Object();

// 1 min 

console.log('------------------------------task 3---------------');

// task 3 ---------- converting JSON to Array

function get_Array_From_JSON() {
   let array = ['james', 'jake'];
   let json = JSON.stringify(array);
   console.log(JSON.parse(json));
}
get_Array_From_JSON();

// 3 min

console.log('---------------------------task 4------------------');


// task 4 ----------- converting JSON to Object

function get_Object_From_JSON() {
   let object = {
      'name': 'Ion Creanga',
      'age': 123,
   }
   let json = JSON.stringify(object);
   console.log(JSON.parse(json));
}
get_Object_From_JSON();
// 2 min

console.log('--------------------------task 5-------------------');


// task 5 ----------- store complex data in json


function getComplexData() {
   let list;
   fetch('./json__list.json')
      .then(res => res.json())
      .then(info => {
         list = info;
      });
   console.log(list);
   let familia = document.querySelector('.info__output--familia');
   familia.innerHTML = list.fnp.familia;

   let name = document.querySelector('.info__output--name');
   name.innerHTML = list.fnp.numele;

   let patronim = document.querySelector('.info__output--patronim');
   patronim.innerHTML = list.fnp.patronimicul;

   let birthDate = document.querySelector('.info__birhday');
   birthDate.innerHTML = list.birthday;

   let number = document.querySelector('.info__number');
   number.innerHTML = list.number;

   let address = document.querySelector('.info__adress');
   address.innerHTML = list.adress;

   let email = document.querySelector('.info__email');
   email.innerHTML = list['e-mail'];

   let gender = document.querySelector('.info__gender');
   gender.innerHTML = list.gender;

   let job = document.querySelector('.info__job');
   job.innerHTML = list.job;

   let startWork = document.querySelector('.info__star-of-work');
   startWork.innerHTML = list['data of the start'];

   let idnp = document.querySelector('.info__idnp');
   idnp.innerHTML = list['IDNP'];

   let salary = document.querySelector('.info__salary');
   salary.innerHTML = list.salary;

   let bithPlace = document.querySelector('.info__bith-place');
   bithPlace.innerHTML = list['birht place'];

   let workTime = document.querySelector('.info__work-time');
   workTime.innerHTML = list.experience;

   let departament = document.querySelector('.info__departament');
   departament.innerHTML = list.departament;

   let homeNumber = document.querySelector('.info__home-number');
   homeNumber.innerHTML = list['home number'];

   let grafic = document.querySelector('.info__grafic');
   grafic.append(list.graphic.mo);
   grafic.append(list.graphic.Tu);
   grafic.append(list.graphic.We);
   grafic.append(list.graphic.Th);
   grafic.append(list.graphic.Fr);
}
//getComplexData();


console.log('----------------------------task 6-----------------');

// task 6 ---------



/*=============================== Algorithms =====================================*/

console.log('---------------------task 1----------------------');

// task 1 --------- get the result 0, 99, 2, 97, …, 3, 98, 1

function getRow() {
   let array = [];
   let a = 99;
   let b = 0;
   for (let index = 0; index < (a + b); index++) {
      array.push(b, a);
      b++;
      a--;
   }
   console.log(array.join(', '));
}
getRow();

// 2 min 

console.log('----------------------------task 2-----------------');


// taks 2 --------- get fibbonaci subsequence

function getFibbonaci(n) {
   let fibbonaciArray = [0, 1];
   if (n == 1) {
      return console.log('0');
   }
   if (n == 2) {
      return console.log('0, 1');
   }
   for (let index = 0; index < n - 2; index++) {
      let newElement = fibbonaciArray[fibbonaciArray.length - 1] + fibbonaciArray[fibbonaciArray.length - 2];
      fibbonaciArray.push(newElement);
   }
   console.log(fibbonaciArray.join(', '));
}
getFibbonaci(15);

// 3 min

console.log('--------------------------task 3-----------------');


// task 3 ---------- get factorial 

let factorial = 1;
function getFactorial(n, factorial) {
   if (n == 0) {
      return console.log(factorial);
   }
   factorial = factorial * n;
   getFactorial(n - 1, factorial);
}
getFactorial(6, factorial);

// 8 min

console.log('-------------------task 4----------------------');


// task 4 ---------- get power of element from 0 to 100

function getPow() {
   let array = [0];
   for (let index = 0; index <= 100; index++) {
      array.push(Math.pow(index, 2));
   }
   console.log(array.join(', '));
}
getPow();

// 2 min

console.log('------------------------task 5-----------------');


// task 5 ----------- get prime number

function getPrimeNumb(n) {
   let array = [2];

   for (let index = 2; index < n; index++) {
      if (index % 2 == 0 && index != n) {
         continue;
      }
      if (String(index).split('').reduce((value, item) => { return value + +item }, 0) % 3 == 0 && index != 3) {
         continue;
      }
      if (String(index)[String(index).length - 1] == 0 || String(index)[String(index).length - 1] == 5 && index != 0 && index != 5) {
         continue;
      }
      if (array.includes(Math.sqrt(index))) {
         continue;
      }
      let includes = true;
      for (let count = 0; count < array.length; count++) {
         if (index % array[count] == 0) {
            includes = false;
         };
      }
      if (includes) {
         array.push(index);
      }

   }
   console.log(array);
}
getPrimeNumb(120);

//10 min 

console.log('------------------------task 6------------------');


// task 6 ------- get list on HTML due to DOM

let data = {
   "Рыбы": {
      "форель": {},
      "лосось": {}
   },

   "Деревья": {
      "Огромные": {
         "секвойя": {},
         "дуб": {}
      },
      "Цветковые": {
         "яблоня": {},
         "магнолия": {}
      }
   },
};
let container = document.getElementById('container');
let dotsStyles = ['disc', 'cercle', 'square', 'georgian', 'disc'];

function createList(container, data, count, dotsStyles, marginLeft) {
   let ul = document.createElement('ul');
   console.log(count);
   ul.style['list-style-type'] = dotsStyles[count];
   ul.style['margin-left'] = (marginLeft) + 'px';
   ul.style['display'] = 'flex';
   ul.style['flex-direction'] = 'column';
   ul.style['gap'] = '5px';
   ul.style['padding-top'] = '5px';
   count--;
   container.append(ul);

   for (let key in data) {
      let listItem = document.createElement('li');
      listItem.innerHTML = key;
      ul.append(listItem);
      if (Object.keys(data[key]) != '') {
         createList(listItem, data[key], count = count + 2, dotsStyles, 30);
         count = count - 2;
      }
   }
}
createList(container, data, 0, dotsStyles, 30);

/*function func(data) {
   let arrKeys1 = [];
   for (let key in data) {
      arrKeys1.push(data[key]);
   }
   for (let index = 0; index < arrKeys1.length; index++) {
      getList(data, index, arrKeys1[index]);
   }
   console.log(arrKeys1);
}
func(data);

function getList(data, index, arrKey){
   for(let key in arrKey[index]){
      if(Object.keys(arrKey[index]) != ''){
         console.log(key);
         getList(data, index, arrKey[key]);
      }
   }
}
*/


console.log('------------------task 7-------------------------');


// task 7 ----------- get matrix

function getMatrix(n) {
   let matrix = [];
   for (let index = 0; index < n; index++) {
      let matrixRow = [];
      for (let index = 0; index < n; index++) {
         matrixRow.push(Math.floor(Math.random() * 10));
      }
      matrix.push(matrixRow);
   }
   console.log(matrix);
}
getMatrix(10);























