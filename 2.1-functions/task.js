"use strict";

function getSolutions(a, b, c) {
  let discriminant = Math.pow(b, 2) - 4 * a * c;

  if (discriminant < 0) {
    return {
      D: discriminant,
      roots: []
    };
  }
  if (discriminant == 0) {
    let x1 = -b / (2 * a);
    return {
      D: discriminant,
      roots: [x1]
    };
  }
  if (discriminant > 0) {
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return {
      D: discriminant,
      roots: [x1, x2]
    };
  }
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);

  if (result.D < 0) {
    console.log("Уравнение не имеет вещественных корней");
  } else if (result.D == 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
  } else if (result.D > 0) {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  }
}

//вторая задача


function getAverageScore(data) {
  let scores = {};
  for (let prop in data) {
    let value = data[prop];
    console.log(`${prop}: ${getAverageMark(value)}`);
    scores[prop] = getAverageMark(data[prop]);
  }

  let average = getAverageMark(Object.values(scores));
  console.log(`average: ${average}`);
}

function getAverageMark(marks) {
  let sumOfMarks = 0;
  for (let i = 0; i < marks.length; i++) {
    sumOfMarks += marks[i];
  }

  return sumOfMarks / marks.length;
}


// третья задача

function getPersonData(secretData) {
  return {
    firstName: getDecodedValue(secretData.aaa),
    lastName: getDecodedValue(secretData.bbb)
  };
}

function getDecodedValue(secret) {
  if (secret === 0) {
    return 'Родриго';
  }
  if (secret === 1) {
    return 'Эмильо';
  }
}