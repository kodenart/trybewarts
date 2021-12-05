/* eslint-disable quotes */
// CAPTURAS DE ELEMENTOS
// const getForm = document.getElementsByClassName('trybewarts-login')[0];
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const btnEnviarCredenciais = document.getElementById('login-button');
const checkBoxAgreement = document.getElementById('agreement');
const btnEnviarFormulario = document.getElementById('submit-btn');
// btnEnviarFormulario.disable = true;
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

function selecionarCheckbox() {
  console.log(checkBoxAgreement.checked);
  if (!checkBoxAgreement.checked) {
    console.log('botão', btnEnviarFormulario.disable);
    btnEnviarFormulario.disable = true;
    return btnEnviarFormulario.disable;
  }
  btnEnviarFormulario.removeAttribute('disabled');
  return btnEnviarFormulario.disable;
}

function enviarFormulario() {
  if (!selecionarCheckbox()) {
    // btnEnviarFormulario.disable = false;
    alert('Formulário enviado com sucesso!');
  } else {
    alert('Você precisa aceitar os termos de uso.');
  }
}
// CAPTURA DE EVENTOS
window.onload = () => {
  btnEnviarCredenciais.addEventListener('click', enviarCredenciais);
  checkBoxAgreement.addEventListener('click', selecionarCheckbox);
  btnEnviarFormulario.addEventListener('click', enviarFormulario);
};

// eslint-disable-next-line editorconfig/editorconfig

/*
// CONTAINERS DE FUNÇÕES
function executarFuncoes(f) {
  enviarCredenciais();
  selecionarCheckbox();
  enviarFormulario();
} */
