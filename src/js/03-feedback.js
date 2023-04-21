import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const result = {};
const emailEl = document.querySelector('[name="email"]');
const messageEl = document.querySelector('[name="message"]');
let jsonParse = JSON.parse(localStorage.getItem('feedback-form-state'));
for (let key in jsonParse) {
  result[key] = jsonParse[key];
}
if (jsonParse && jsonParse.message !== undefined) {
  messageEl.value = jsonParse.message;
}
if (jsonParse && jsonParse.email !== undefined) {
  emailEl.value = jsonParse.email;
}
formEl.addEventListener('input', e => {
  result[e.target.attributes.name.value] = e.target.value;
  throttle(localStorage.setItem('feedback-form-state', JSON.stringify(result)),500)  
});
formEl.addEventListener('submit', e => {
  if(emailEl.value === ""|| messageEl.value === ""){
    alert("Введіть значення")
  }
  e.preventDefault();
  localStorage.removeItem('feedback-form-state')
  formEl.reset();
});
