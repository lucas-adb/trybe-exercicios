import validator from 'validator';
import './style.css';

const inputTest = document.querySelector('#input-test');
const setType = document.querySelector('#set-type');
const validateBtn = document.querySelector('#validate-btn');
const displayResult = document.querySelector('#display-result');

const checkEmail = () => {
  if (validator.isEmail(inputTest.value)) {
    displayResult.innerHTML = 'true';
  } else {
    displayResult.innerHTML = 'false';
  }
};

const checkCPF = () => {
  if (validator.isTaxID(inputTest.value, 'pt-BR')) {
    displayResult.innerHTML = 'true';
  } else {
    displayResult.innerHTML = 'false';
  }
};

const checkDate = () => {
  if (validator.isDate(inputTest.value)) {
    displayResult.innerHTML = 'true';
  } else {
    displayResult.innerHTML = 'false';
  }
};

const checkPhone = () => {
  if (validator.isMobilePhone(inputTest.value, 'pt-BR')) {
    displayResult.innerHTML = 'true';
  } else {
    displayResult.innerHTML = 'false';
  }
};

const checkNumber = () => {
  if (validator.isNumeric(inputTest.value)) {
    displayResult.innerHTML = 'true';
  } else {
    displayResult.innerHTML = 'false';
  }
};

window.onload = () => {
  validateBtn.addEventListener('click', () => {
    if (setType.value === 'Email') {
      checkEmail();
    }
    if (setType.value === 'CPF') {
      checkCPF();
    }
    if (setType.value === 'Date') {
      checkDate();
    }
    if (setType.value === 'Phone') {
      checkPhone();
    }
    if (setType.value === 'Number') {
      checkNumber();
    }
  });
};
