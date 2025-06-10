// dashboard.js

function adicionarGanho() {
  alert("Abrir formulário para adicionar ganho");
}

function adicionarGasto() {
  alert("Abrir formulário para adicionar gasto");
}

// Gráfico de pizza
const pizzaCtx = document.getElementById('pizzaChart').getContext('2d');
new Chart(pizzaCtx, {
  type: 'doughnut',
  data: {
    labels: ['Produtos', 'Marketing', 'Aluguel', 'Transporte'],
    datasets: [{
      label: 'Gastos por categoria',
      data: [800, 500, 600, 410],
      backgroundColor: ['#66bb6a', '#81c784', '#a5d6a7', '#c8e6c9']
    }]
  }
});

// Gráfico de barras
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Ganhos',
        data: [3000, 4200, 5000, 4800, 5200, 5000],
        backgroundColor: '#2e7d32'
      },
      {
        label: 'Gastos',
        data: [1200, 1800, 2300, 2000, 2100, 2310],
        backgroundColor: '#c8e6c9'
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
