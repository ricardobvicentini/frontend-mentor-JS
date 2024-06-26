'use strict';

const inputs = document.querySelectorAll('input');
const yearResult = document.querySelector('.year');
const monthResult = document.querySelector('.month');
const daysResult = document.querySelector('.days');
const btn = document.querySelector('.btn');
let day1 = document.getElementById('day_input');
let month1 = document.getElementById('month_input');
let year1 = document.getElementById('year_input');
let date = new Date();
let day2 = date.getDate();
let month2 = 1 + date.getMonth();
let year2 = date.getFullYear();
let monthLastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function clearResult() {
  yearResult.innerHTML = `<em>--</em>`;
  monthResult.innerHTML = `<em>--</em>`;
  daysResult.innerHTML = `<em>--</em>`;
}

function clearInput() {
  inputs.forEach((input) => {
    input.style.borderColor = 'var(--cl-light-grey)';
    input.previousElementSibling.style.color = 'var(--cl-smokey-grey)';
    input.nextElementSibling.classList.add('hidden');
  });
}

function ageCalc() {
  if (day1.value > day2) {
    day2 = day2 + monthLastDays[month2 - 1];
    month2 = month2 - 1;
  }

  if (month1.value > month2) {
    month2 = month2 + 12;
    year2 = year2 - 1;
  }

  let day = day2 - day1.value;
  let month = month2 - month1.value;
  let year = year2 - year1.value;

  yearResult.innerHTML = `<em>${year}</em>`;
  monthResult.innerHTML = `<em>${month}</em>`;
  daysResult.innerHTML = `<em>${day}</em>`;
}

/* Existing date */

function daysInMonth(year, month) {
  switch (parseInt(month, 10)) {
    case 2: // February
      return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? 29 : 28;
    case 8:
    case 3:
    case 5:
    case 10:
      return 30;
    default:
      return 31;
  }
}

function isValidDate(m, d, y) {
  m = parseInt(m, 10) - 1;
  let daysInGivenMonth = daysInMonth(y, m + 1);
  return m >= 0 && m < 12 && d > 0 && d <= daysInGivenMonth;
}

/* --------------- */

function invalidDate() {
  if (day1.value > 31) {
    day1.style.borderColor = 'var(--cl-light-red)';
    day1.previousElementSibling.style.color = 'var(--cl-light-red)';
    day1.nextElementSibling.classList.remove('hidden');
    day1.nextElementSibling.innerHTML = '<em>Must be a valid day</em>';
    clearResult();
  }

  if (month1.value > 12) {
    month1.style.borderColor = 'var(--cl-light-red)';
    month1.previousElementSibling.style.color = 'var(--cl-light-red)';
    month1.nextElementSibling.classList.remove('hidden');
    month1.nextElementSibling.innerHTML = '<em>Must be a valid month</em>';
    clearResult();
  }

  if (year1.value > year2) {
    year1.style.borderColor = 'var(--cl-light-red)';
    year1.previousElementSibling.style.color = 'var(--cl-light-red)';
    year1.nextElementSibling.classList.remove('hidden');
    year1.nextElementSibling.innerHTML = '<em>Must be in the past</em>';
    clearResult();
  }

  if (day1.value <= 31 && month1.value <= 12 && year1.value <= year2) {
    clearResult();
    if (!isValidDate(month1.value, day1.value, year1.value)) {
      console.log('invalid');
      inputs.forEach((input) => {
        input.style.borderColor = 'var(--cl-light-red)';
        input.previousElementSibling.style.color = 'var(--cl-light-red)';
        input.nextElementSibling.classList.remove('hidden');
      });
    } else {
      ageCalc();
    }
  }
}

function fieldRequired() {
  inputs.forEach((input) => {
    if (!input.value) {
      input.style.borderColor = 'var(--cl-light-red)';
      input.previousElementSibling.style.color = 'var(--cl-light-red)';
      input.nextElementSibling.classList.remove('hidden');
      input.nextElementSibling.innerHTML = '<em>This field is required</em>';
    } else {
      clearInput();
      invalidDate();
    }
  });
}

btn.addEventListener('click', () => {
  fieldRequired();
});
