"use strict";

//задача №1

function parseCount(value) {
  const parsed = Number.parseInt(value);
  if (isNaN(parsed)) {
    throw new Error("Невалидное значение");
  }
  return parsed;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (e) {
    return Error("Невалидное значение");
  }
}

//задача №2

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  getPerimeter() {
    return parseFloat(this.a + this.b + this.c);
  }
  getArea() {
    const halfPerimeter = this.getPerimeter() / 2;
    return parseFloat(Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c)).toFixed(3));
  }
}
function getTriangle(a, b, c) {
  try {
    // let newTriangle = new Triangle(a, b, c);
    return new Triangle(a, b, c);
  } catch (e) {
    return {
      getPerimeter() {
        return "Ошибка! Неправильный треугольник";
      },
      getArea() {
        return "Ошибка! Неправильный треугольник";
      },
    };
  }
}

