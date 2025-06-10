// form.js

function atualizarTipo() {
  const tipo = document.getElementById("tipo").value;
  const title = document.getElementById("formTitle");
  const container = document.querySelector(".container");

  if (tipo === "ganho") {
    title.textContent = "Adicionar Ganho";
    container.style.backgroundColor = "#e8f5e9";
  } else {
    title.textContent = "Adicionar Gasto";
    container.style.backgroundColor = "#ffebee";
  }
}

function salvarRegistro() {
  const tipo = document.getElementById("tipo").value;
  const valor = parseFloat(document.getElementById("valor").value);
  const categoria = document.getElementById("categoria").value;
  const descricao = document.getElementById("descricao").value;
  const data = document.getElementById("data").value;

  if (!valor || !categoria || !data) {
    alert("Preencha todos os campos obrigatórios!");
    return;
  }

  const registro = {
    tipo,
    valor,
    categoria,
    descricao,
    data
  };

  // Salvar no LocalStorage
  let registros = JSON.parse(localStorage.getItem("registros")) || [];
  registros.push(registro);
  localStorage.setItem("registros", JSON.stringify(registros));

  alert("Registro salvo com sucesso!");
  window.location.href = "dashboard.html"; // voltar pro dashboard
}
