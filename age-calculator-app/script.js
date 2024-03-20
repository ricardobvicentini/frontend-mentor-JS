'use strict';

const inputs = document.querySelectorAll('input');
const yearResult = document.querySelector('.year');
const monthResult = document.querySelector('.month');
const daysResult = document.querySelector('.days');
const btn = document.querySelector('.btn');

function ageCalc() {
  fieldRequired();
  let day1 = document.getElementById('day_input');
  let month1 = document.getElementById('month_input');
  let year1 = document.getElementById('year_input');
  let date = new Date();
  let day2 = date.getDate();
  let month2 = 1 + date.getMonth();
  let year2 = date.getFullYear();
  let monthLastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  invalidDate(day1, month1, year1, year2);

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

function invalidDate(d, m, y, y2) {
  if (d.value > 31) {
    d.style.borderColor = 'var(--cl-light-red)';
    d.previousElementSibling.style.color = 'var(--cl-light-red)';
    d.nextElementSibling.classList.remove('hidden');
    d.nextElementSibling.innerHTML = '<em>Must be a valid day</em>';
  }

  if (m.value > 12) {
    m.style.borderColor = 'var(--cl-light-red)';
    m.previousElementSibling.style.color = 'var(--cl-light-red)';
    m.nextElementSibling.classList.remove('hidden');
    m.nextElementSibling.innerHTML = '<em>Must be a valid month</em>';
  }

  if (y.value > y2) {
    y.style.borderColor = 'var(--cl-light-red)';
    y.previousElementSibling.style.color = 'var(--cl-light-red)';
    y.nextElementSibling.classList.remove('hidden');
    y.nextElementSibling.innerHTML = '<em>Must be in the past</em>';
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
      input.style.borderColor = 'var(--cl-light-grey)';
      input.previousElementSibling.style.color = 'var(--cl-smokey-grey)';
      input.nextElementSibling.classList.add('hidden');
    }
  });
}

btn.addEventListener('click', () => {
  ageCalc();
});
