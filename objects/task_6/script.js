
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
   return finalArray;
}
console.log(corectCoords());

// 5min