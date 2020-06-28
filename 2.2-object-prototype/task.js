"use strict";

// задача №1
String.prototype.isPalindrome = function () {
  
  let str = this.toLowerCase().split('').reverse().join('');
  return str.split(' ').join('') === this.toLowerCase().split(' ').join('') ? true : false;
}


// задача №2
function getAverageMark(marks) {

  let sumOfMarks = 0;
  for (let i = 0; i < marks.length; i++) {
    sumOfMarks += marks[i];
  }

  let average = sumOfMarks / marks.length;
  let roundedAverage = Math.round(average);
  return roundedAverage;
}


// задача №3
function checkBirthday(birthday) {
  
  let now = new Date();
  let bday = new Date(birthday);
  let diff = Date.parse(now) - Date.parse(bday);
  let age = diff / 31536000000;
  return age >= 18 ? true : false;
}
