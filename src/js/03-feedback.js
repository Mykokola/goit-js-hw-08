import throttle from 'lodash.throttle';
function feedbackModule() {
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
  function setLocal(){
    result[emailEl.name] = emailEl.value
    result[messageEl.name] = messageEl.value
    localStorage.setItem('feedback-form-state', JSON.stringify(result))
  }
    formEl.addEventListener('input',throttle(setLocal, 500));
  formEl.addEventListener('submit', e => {
    if(emailEl.value === ""|| messageEl.value === ""){
     return alert("Введіть значення")
    }
    e.preventDefault();
    localStorage.removeItem('feedback-form-state')
    formEl.reset();
  });
};
feedbackModule()
// import throttle from 'lodash.throttle';


// const LOCAL_KEY = 'feedback-form-state';

// form = document.querySelector('.feedback-form');

// form.addEventListener('input', throttle(onInputData, 5000));
// form.addEventListener('submit', onFormSubmit);

// let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
// const { email, message } = form.elements;
// reloadPage();

// function onInputData(e) {
//   dataForm = { email: email.value, message: message.value };
//   localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
// }

// function reloadPage() {
//   if (dataForm) {
//     email.value = dataForm.email || '';
//     message.value = dataForm.message || '';
//   }
// }

// function onFormSubmit(e) {
//   e.preventDefault();
//   console.log({ email: email.value, message: message.value });

//   if (email.value === '' || message.value === '') {
//     return alert('Please fill in all the fields!');
//   }

//   localStorage.removeItem(LOCAL_KEY);
//   e.currentTarget.reset();
//   dataForm = {};
// }