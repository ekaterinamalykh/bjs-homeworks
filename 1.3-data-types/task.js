'use strict'

function calculateTotalMortgage(percent, contribution, amount, date) {

  if (isNaN(percent)) {
    return `Параметр "процентная ставка" содержит неправильное значение ${percent}`;
  }

  if (isNaN(contribution)) {
    return `Параметр "сумма первоначального взноса" содержит неправильное значение ${contribution}`;
  }

  if (isNaN(amount)) {
    return `Параметр "сумма кредита" содержит неправильное значение ${amount}`;
  }

  if (isNaN(date)) {
    return `Параметр "дата окончания кредита" содержит неправильное значение ${date}`;
  }

  let loan = amount - contribution;
  let now = new Date();
  let persentageRate = percent / 100 / 12;
  let totalMonths = Math.round((Date.parse(date) - Date.parse(now)) / 86400000 / 30);
  let monthlyPayment = loan * (persentageRate + persentageRate / ((Math.pow(1 + persentageRate, totalMonths) - 1)));
  let totalAmount = Math.floor(monthlyPayment * totalMonths * 100) / 100;
  
  console.log(totalAmount);

  return totalAmount;

}


function getGreeting(name) {

  return (`Привет, мир! Меня зовут ${name || "Аноним"}`);

}