'use strict';

//Задача №1

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // Замедление на половину секунды.
  sleep(100); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays(arr1, arr2) {
  function comparison(arr1, arr2, index) {
    if (arr1[index] === arr2[index]) {
      return true;
    } else {
      return false;
    }
  }
    if (arr1.length === arr2.length && arr1.every(comparison) === true) {
      return true;
  } else {
      return false;
    }
  }

function memorize(fn, limit) {
  const memory = [];
  return function(...args) {
    memory.push({args: args, result: fn(...args)});
    console.log(memory);
    return fn(...args);
     }
}
 function fn() {
  memory.find(compareArrays);
  // if (memory.length > limit) {
  //   memory.filter()
  // }
 }

 function testCase(testFunction, setTimeout) {
   let arr3 = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];
   console.time(setTimeout);
   for(let i = 0; i < arr3.length; i++) {
     for (let j = 0; j < 100; j++) {
      //  setTimeout[i].forEach(testFunction());
       console.timeEnd(setTimeout);
     }
   }
 }

