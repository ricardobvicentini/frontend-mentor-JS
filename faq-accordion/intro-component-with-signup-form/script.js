'use strict';

const inputs = document.querySelectorAll('.input-field');
const email = document.querySelector('.input-email');
const password = document.querySelector('.input-pass');
const btn = document.querySelector('.btn-2');

const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

function focus(el, fSib, sSib) {
  el.addEventListener('focus', () => {
    fSib.classList.add('hidden');
    sSib.classList.add('hidden');
    el.style.borderColor = 'var(--cl-border)';
    el.value = '';
  });
}

function time(border) {
  setTimeout(() => {
    border.style.borderColor = 'var(--cl-border)';
    border.style.borderSize = '1px';
  }, 300);
}

function reset() {
  inputs.forEach((input) => {
    input.value = '';
    input.style.borderColor = 'green';
    input.style.borderSize = '3px';
    time(input);
  });
  email.value = '';
  email.style.borderColor = 'green';
  email.style.borderSize = '3px';
  time(email);
  password.value = '';
  password.style.borderColor = 'green';
  password.style.borderSize = '3px';
  time(password);
}

btn.addEventListener('click', () => {
  let allCriteriaMet = true;
  inputs.forEach((input) => {
    const icon = input.nextElementSibling;
    const msg = icon.nextElementSibling;
    if (input.value === '') {
      input.style.borderColor = 'var(--cl-primary-red)';
      icon.classList.remove('hidden');
      msg.classList.remove('hidden');
      focus(input, icon, msg);
      allCriteriaMet = false;
    }
  });

  if (email.value === '' || !email.value.match(regex)) {
    const eIcon = email.nextElementSibling;
    const eMsg = eIcon.nextElementSibling;
    email.style.borderColor = 'var(--cl-primary-red)';
    eIcon.classList.remove('hidden');
    eMsg.classList.remove('hidden');
    focus(email, eIcon, eMsg);
    allCriteriaMet = false;
  }

  if (password.value === '') {
    const pIcon = password.nextElementSibling;
    const pMsg = pIcon.nextElementSibling;
    password.style.borderColor = 'var(--cl-primary-red)';
    pIcon.classList.remove('hidden');
    pMsg.classList.remove('hidden');
    focus(password, pIcon, pMsg);
    allCriteriaMet = false;
  }

  if (allCriteriaMet) {
    reset();
  }
});
