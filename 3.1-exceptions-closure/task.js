"use strict";

//задача №1

function parseCount(value) {
  if (isNaN(Number.parseInt(value))) {
    throw new Error("Невалидное значение");
  }
  const parsed = Number.parseInt(value);
  return parsed;
}

function validateCount(value) {
  try {
    const parseResult = parseCount(value);
    return parseResult;
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
    if (this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.c < this.a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  getPerimeter() {
    const perimeter = parseFloat(this.a + this.b + this.c);
    return perimeter;
  }
  getArea() {
    const halfPerimeter = this.getPerimeter() / 2;
    const area = parseFloat(Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c)).toFixed(3));
    return area;
  }
}
function getTriangle(a, b, c) {
  try {
    let newTriangle = new Triangle(a, b, c);
    return newTriangle;
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

