'use strict';

function getResult(a,b,c){
    
    let D = Math.pow(b, 2) - 4 * a * c;
    let x = [];
    
    if (D < 0) {
        return x;
    } else if (D == 0) {
        x.push(-b / (2 * a));
    } else if (D > 0) {
        x.push((-b + Math.sqrt(D)) / (2 * a) , (-b - Math.sqrt(D)) / (2 * a));
    }
    return x;
}

function getAverageMark(marks){

    if (marks.length == 0) {
        return 0;
    } 
    
    else if (marks.length > 5) {
        console.log('Количество оценок больше 5');
        marks.splice(5);
    }
    
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += parseInt(marks[i]);
    }
    
    let averageMark = sum / marks.length;
    return averageMark;
}


function askDrink(name,dateOfBirthday){

    let now = new Date();
    let currentYear = now.getFullYear();

    let birthday = new Date(dateOfBirthday);
    let yearOfBirth = birthday.getFullYear();

    if (currentYear - yearOfBirth >= 18) {
        return `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
}