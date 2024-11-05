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


