const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['HOMBRES', 'MUJERES', 'MENORES'],
      datasets: [{
        label: '',
        data: [12, 19, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const ctx1 = document.getElementById('myChart1');
  new Chart(ctx1, {
    type: 'doughnut',
    data: {
      labels: ['HOMBRES', 'MUJERES', 'MENORES'],
      datasets: [{
        label: '',
        data: [12, 19, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const ctx2 = document.getElementById('graficosDias');
  new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'],
      datasets: [{
        label: 'PACIENTES ATENDIDOS POR MES',
        data: [12, 19, 3,20,48,75,89,74,95,10,45,78],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


