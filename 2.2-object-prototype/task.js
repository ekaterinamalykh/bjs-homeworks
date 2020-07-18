"use strict";

// задача №1
String.prototype.isPalindrome = function () {
  
  let str = this.toLowerCase().split('').reverse().join('');
  return str.split(' ').join('') === this.toLowerCase().split(' ').join('');
}

// задача №2
function getAverageMark(marks) {

  let sumOfMarks = 0;
  for (let i = 0; i < marks.length; i++) {
    sumOfMarks += marks[i];
  }

  const average = sumOfMarks / marks.length;
  const roundedAverage = Math.round(average);
  return roundedAverage || 0;
}

// задача №3
function checkBirthday(birthday) {
  
  const now = new Date();
  const birthdayDate = new Date(birthday);
  const diff = Date.parse(now) - Date.parse(birthdayDate);
  const age = diff / 31536000000;
  return age >= 18;
}
