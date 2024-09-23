
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

   MaxMinMark(getMediaMarks(students));

   sortStudents(getMediaMarks(students));

   BetterThanMedia(getMediaMarks(students));

   //console.log(students);

}
console.log(getStudentsArray());

// function 1 

function getMediaMarks(students) {
   let mediaCatalog = {};
   for (let index = 0; index < students.length; index++) {

      let currentMarks = students[index].marks;
      let mediaMark = (currentMarks.reduce((previous, item) => { return previous + item }, 0) / currentMarks.length).toFixed(2);

      mediaCatalog[students[index].name] = mediaMark;
   }
   console.log(mediaCatalog);
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

function MaxMinMark(mediaCatalog) {
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