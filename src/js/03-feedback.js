import throttle from 'lodash.throttle';

const LOCAL_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

let dataForm = loadFromLocalStorage();

function onInputData() {
  dataForm = { email: email.value, message: message.value };
  saveToLocalStorage(dataForm);
}

function loadFromLocalStorage() {
  return JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
}

function saveToLocalStorage(data) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
}

function reloadPage() {
  email.value = dataForm.email || '';
  message.value = dataForm.message || '';
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }

  localStorage.removeItem(LOCAL_KEY);
  form.reset();
  dataForm = {};
}

reloadPage();