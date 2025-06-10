document.addEventListener("DOMContentLoaded", function () {
    // Botões para adicionar ganho e gasto
    document.getElementById("btnAdicionarGanho").addEventListener("click", function () {
        window.location.href = "form.html?tipo=ganho";
    });

    document.getElementById("btnAdicionarGasto").addEventListener("click", function () {
        window.location.href = "form.html?tipo=gasto";
    });

    // Funções de exemplo para carregar dados simulados
    const dadosGanhos = [3000, 4200, 5000, 4800, 5300, 5000];
    const dadosGastos = [1200, 1800, 2300, 2000, 2100, 2300];

    const totalGanhos = dadosGanhos.reduce((a, b) => a + b, 0);
    const totalGastos = dadosGastos.reduce((a, b) => a + b, 0);
    const lucro = totalGanhos - totalGastos;

    document.getElementById("ganhos").textContent = totalGanhos.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    document.getElementById("gastos").textContent = totalGastos.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    document.getElementById("lucro").textContent = lucro.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    // Renderiza gráficos
    renderizarGraficos(dadosGanhos, dadosGastos);
});

function renderizarGraficos(ganhos, gastos) {
    // Gráfico de barras
    const ctxBar = document.getElementById("graficoBarra").getContext("2d");
    new Chart(ctxBar, {
        type: "bar",
        data: {
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
            datasets: [
                {
                    label: "Ganhos",
                    data: ganhos,
                    backgroundColor: "#2e7d32"
                },
                {
                    label: "Gastos",
                    data: gastos,
                    backgroundColor: "#a5d6a7"
                }
            ]
        }
    });

    // Gráfico de pizza
    const ctxPizza = document.getElementById("graficoPizza").getContext("2d");
    new Chart(ctxPizza, {
        type: "doughnut",
        data: {
            labels: ["Produtos", "Marketing", "Aluguel", "Transporte"],
            datasets: [{
                data: [800, 600, 500, 410],
                backgroundColor: ["#66bb6a", "#81c784", "#a5d6a7", "#c8e6c9"]
            }]
        }
    });
}
