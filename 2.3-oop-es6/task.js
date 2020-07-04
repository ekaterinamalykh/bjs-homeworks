"use strict";

//задача № 1

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  fix() {
    this.state = this.state * 1.5;
    return this.state;
  }
  set state(value) {
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state = 100;
    } else {
      this._state = value;
    }
  }
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

// задача №2

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (this.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value) {
        return this.books[i];
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        return this.books.splice([i], 1)[0];
      }
    }
    return null;
  }
}

//задача №3
class StudentLog {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
    let subjectGrades = [];
    if (grade < 1 || grade > 5 || isNaN(grade)) {
      console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5`);
      return subjectGrades.length;
    } else {
      subjectGrades.push(grade);
    }
    return subjectGrades.length;
  }

  getAverageBySubject(subject) {
    if (subject === undefined) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < this.subject.length; i++) {
      sum += this.subject[i];
    }

    return sum / this.subject.length;
  }

  getTotalAverage() {

  }
}
