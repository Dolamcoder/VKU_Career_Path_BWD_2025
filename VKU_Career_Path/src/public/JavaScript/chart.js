let chartInstances = {};

const createCharts = () => {
  if (chartInstances.graduatesBarChart) chartInstances.graduatesBarChart.destroy();
  if (chartInstances.studentsBarChart) chartInstances.studentsBarChart.destroy();
  if (chartInstances.employmentPieChart) chartInstances.employmentPieChart.destroy();

  chartInstances.graduatesBarChart = new Chart(document.getElementById('graduatesBarChart'), {
    type: 'bar',
    data: {
      labels: ['2019', '2020', '2021', '2022', '2023'],
      datasets: [{
        label: 'Số SV tốt nghiệp',
        data: [300, 450, 520, 610, 700],
        backgroundColor: '#007bff',
        borderRadius: 5
      }]
    },
    options: {
      animation: {
        duration: 1000,
        easing: 'easeOutQuart'
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Số lượng'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Năm'
          }
        }
      }
    }
  });

  chartInstances.studentsBarChart = new Chart(document.getElementById('studentsBarChart'), {
    type: 'bar',
    data: {
      labels: ['Khoa Học Máy Tính', 'Kỹ Thuật Máy tính', 'Kinh tế số&TMĐT'],
      datasets: [{
        label: 'Số lượng',
        data: [5000, 11500, 12516, 51156],
        backgroundColor: ['#17a2b8', '#e83e8c', '#dc3545'],
        borderRadius: 5
      }]
    },
    options: {
      animation: {
        duration: 1000,
        easing: 'easeOutQuart'
      },
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Số lượng'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Khoa'
          }
        }
      }
    }
  });

  chartInstances.employmentPieChart = new Chart(document.getElementById('employmentPieChart'), {
    type: 'doughnut',
    data: {
      labels: ['Có việc làm', 'Chưa có'],
      datasets: [{
        data: [85, 15],
        backgroundColor: ['#28a745', '#dc3545'],
        borderWidth: 2
      }]
    },
    options: {
      animation: {
        duration: 1000,
        easing: 'easeOutQuart'
      },
      plugins: {
        legend: {
          position: 'bottom'
        },
        datalabels: {
          color: '#fff',
          formatter: (value, ctx) => {
            const total = ctx.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return percentage + '%';
          }
        }
      }
    },
    plugins: [ChartDataLabels]
  });
};

const chartSection = document.querySelector('.bar-charts');
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    createCharts();
  }
}, { threshold: 0.5 });

observer.observe(chartSection);