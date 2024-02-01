'use strict';

const inputs = document.querySelectorAll('.input-field');
const email = document.querySelector('.input-email');
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

btn.addEventListener('click', () => {
  inputs.forEach((input) => {
    const icon = input.nextElementSibling;
    const msg = icon.nextElementSibling;
    if (input.value === '') {
      input.style.borderColor = 'var(--cl-primary-red)';
      icon.classList.remove('hidden');
      msg.classList.remove('hidden');
      focus(input, icon, msg);
    }
    if (!email.value.match(regex)) {
      const eIcon = email.nextElementSibling;
      const eMsg = eIcon.nextElementSibling;
      email.style.borderColor = 'var(--cl-primary-red)';
      eIcon.classList.remove('hidden');
      eMsg.classList.remove('hidden');
      focus(email, eIcon, eMsg);
    }
  });
});
