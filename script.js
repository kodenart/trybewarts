/* eslint-disable quotes */
// CAPTURAS DE ELEMENTOS
// const getForm = document.getElementsByClassName('trybewarts-login')[0];
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const btnEnviarCredenciais = document.getElementById('login-button');
const checkBoxAgreement = document.getElementById('agreement');
const btnEnviarFormulario = document.getElementById('submit-btn');
const counterTextArea = document.getElementById('textarea');
const counter = document.getElementById('counter');

// FUNÇÕES DE EXECUÇÃO
function enviarCredenciais() {
  if (
    emailInput.value === 'tryber@teste.com'
    && passwordInput.value === '123456'
  ) {
    alert('Olá, Tryber!');
  }
  alert('Email ou senha inválidos.');
}

function contarCaracteres() {
  const quantCaracteres = counterTextArea.value.length;
  counter.value = 500 - parseInt(quantCaracteres, 10);
  counter.innerHTML = counter.value;
}

// function selecionarCheckbox() {
//   console.log(checkBoxAgreement.checked);
//   if (!checkBoxAgreement.checked) {
//     console.log('botão', btnEnviarFormulario.disable);
//     btnEnviarFormulario.disable = true;
//     return btnEnviarFormulario.disable;
//   }
//   btnEnviarFormulario.removeAttribute('disabled');
//   return btnEnviarFormulario.disable;
// }

// function enviarFormulario() {
//   if (!selecionarCheckbox()) {
//     // btnEnviarFormulario.disable = false;
//     alert('Formulário enviado com sucesso!');
//   } else {
//     alert('Você precisa aceitar os termos de uso.');
//   }
// }

function toggleSubButton() {
  const buttonState = btnEnviarFormulario.disabled;
  // forma mais enxuta que consegui pensar
  btnEnviarFormulario.disabled = buttonState !== true;
}

// se houver algum input não preenchido na seção email-casa-container, retorna falso.
function checkFirstInputs() {
  const firstSecInputs = document.querySelectorAll('section#email-casa-container input[type=text]');
  for (let i = 0; i < 3; i += 1) {
    if (firstSecInputs[i].value === '') {
      return false;
    }
  }
  return true;
}

// Se houver algum campo desse tipo não preenchido, retorna falso.
function checkNonTextInput() {
  const secndInputs = document.querySelector('input[name=family]:checked') === null;
  const thirdInputs = document.querySelector('div#webdev-content input:checked') === null;
  const fourthInputs = document.querySelector('input[name=rate]:checked') === null;
  if (secndInputs || thirdInputs || fourthInputs) {
    return false;
  }
  return true;
}

function checkAllInputs() {
  const aInputs = checkFirstInputs();
  const bInputs = checkNonTextInput();

  // Se o textarea não estiver preenchido, retorna falso.
  const cInputs = document.getElementsByTagName('textarea')[0].value !== '';

  // Se todos os campos estiverem preenchidos, retorna verdadeiro.
  if (aInputs && bInputs && cInputs) {
    return true;
  }
  return false;
}

function switchFirstPart() {
  const theForm = document.getElementById('evaluation-form');

  const newElemName = document.createElement('p');
  const name = document.querySelectorAll('section#email-casa-container input[type=text]');
  newElemName.innerText = `Nome: ${name[0].value} ${name[1].value}`;
  theForm.appendChild(newElemName);

  const newElemEmail = document.createElement('p');
  newElemEmail.innerText = `Email: ${name[2].value}`;
  theForm.appendChild(newElemEmail);

  const newElemHouse = document.createElement('p');
  const selectedHouse = document.getElementById('house').value;
  newElemHouse.innerText = `Casa: ${selectedHouse}`;
  theForm.appendChild(newElemHouse);

  theForm.removeChild(document.getElementById('email-casa-container'));
  theForm.removeChild(document.getElementsByTagName('hr')[0]);
}

function switchEverything() {
  switchFirstPart();
}

function submitForm(event) {
  event.preventDefault();
  // função não necessária para passar nos resuisitos, mas achei que faria sentido cria-la. (checkAllInputs)
  const allFilled = checkAllInputs();
  if (allFilled) {
    switchEverything();
  } else {
    alert('Favor, preencher todos os campos.');
  }
}

// CAPTURA DE EVENTOS
window.onload = () => {
  btnEnviarCredenciais.addEventListener('click', enviarCredenciais);
  // checkBoxAgreement.addEventListener('click', selecionarCheckbox);
  checkBoxAgreement.addEventListener('click', toggleSubButton);
  // btnEnviarFormulario.addEventListener('click', enviarFormulario);
  btnEnviarFormulario.addEventListener('click', submitForm);
  counterTextArea.addEventListener('keyup', contarCaracteres);
  btnEnviarFormulario.disabled = true;
};

// eslint-disable-next-line editorconfig/editorconfig

/*
// CONTAINERS DE FUNÇÕES
function executarFuncoes(f) {
  enviarCredenciais();
  selecionarCheckbox();
  enviarFormulario();
} */
