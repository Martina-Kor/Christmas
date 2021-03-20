'use strict';
/* 
// KREDITNÍ KARTA
// 1.2
const email = prompt('Zadej email k ověření:');

console.log(email);
console.log(validator.isEmail(email));
 */
/* // 1.3
const card = prompt('Zadej číslo kreditní karty k ověření:');

console.log(card);
console.log(validator.isCreditCard(card));
 */
// 1.4
// vložení odstavce p

/* // 1.5
const emailUser = prompt('Zadej email k ověření:');

console.log(emailUser);
console.log(validator.isEmail(emailUser));

const x = validator.isEmail(emailUser);
if (x === true) {
  write.document('E-mail v pořádku');
} else {
  ('Neplatný e-mail');
}


From Stanislava Vavřinová to Everyone:  03:/* 28 PM */
/* if (validator.isEmail(email) === true) {
  messagePanel.textContent = 'E-mail v pořádku';
  messagePanel.classList.add('msg--valid');
  messagePanel.style.backgroundColor = 'green';
} else {
  messagePanel.textContent = 'E-mail je špatně';
  messagePanel.classList.add('msg--invalid');
  messagePanel.style.backgroundColor = 'red';
}
 */
// 1.6
const messagePanel = document.querySelector('#msg');
const dateStedryDen = dayjs('2021-12-24');
const dnes = dayjs();

if (dnes.isAfter(dateStedryDen)) {
  messagePanel.textContent = 'Ano, byl.';
  messagePanel.style.color = 'red';
} else {
  messagePanel.textContent = 'Ještě ne.';
  messagePanel.style.color = 'green';
}
