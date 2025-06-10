// script.js
function login() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  if (email === "admin@teste.com" && senha === "123") {
    alert("Login bem-sucedido!");
    // depois redirecionamos para a tela principal
  } else {
    alert("E-mail ou senha inválidos");
  }
}
