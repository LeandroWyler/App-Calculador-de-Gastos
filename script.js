function login() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  if (email === "admin@teste.com" && senha === "123") {
    alert("Login bem-sucedido!");
    window.location.href = "/dashboard.html"; // redireciona corretamente
  } else {
    alert("E-mail ou senha inválidos");
  }
}
