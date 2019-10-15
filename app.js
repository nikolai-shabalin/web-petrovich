const form = document.querySelector('form');
const genderInput = document.querySelector('.gender');
const caseInput = document.querySelector('.case');
const lastNameInput = document.querySelector('.last-name');
const firstNameInput = document.querySelector('.first-name');
const secondNameInput = document.querySelector('.second-name');
const resultNode = document.querySelector('.result');


/*События*/
form.addEventListener('submit', event => event.preventDefault());
form.addEventListener('input', () => {
  setResult();
});

function setResult() {
  let person = {
    gender: genderInput.value,
    first: firstNameInput.value || 'Пётр',
    middle: secondNameInput.value,
    last: lastNameInput.value  || 'Чайковский'
  };

  const {gender, first, middle: second, last} = petrovich(person, caseInput.value);
  resultNode.textContent = `${last} ${first} ${second}`;
}

setResult();