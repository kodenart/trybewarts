// CAPTURAS DE ELEMENTOS
// const getForm = document.getElementsByClassName('trybewarts-login')[0];
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const btnForm = document.getElementById('login-button');

// FUNÇÕES DE VALIDAÇÃO
function clicarBotao() {
  if (
    emailInput.value === 'tryber@teste.com' &&
    passwordInput.value === '123456'
  ) {
    alert('Olá, Tryber!');
  }
  alert('Email ou senha inválidos.');
}

// CAPTURA DE EVENTOS
window.onload = () => {
  btnForm.addEventListener('click', clicarBotao);
};
