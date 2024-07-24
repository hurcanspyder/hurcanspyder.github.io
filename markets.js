// Data for the chart
const data = {
  labels: ['Dataset 1',
    'Dataset 2',
    'Dataset 3',
    'Dataset 4'],
  datasets: [{
    label: 'DaTa',
    data: [{
      x: 10,
      y: 300,
      base: 90
    },
      {
        x: 6,
        y: 10,
        base: 2
      },
      {
        x: 15,
        y: 8,
        base: 4
      },
      {
        x: 8,
        y: 11,
        base: 3
      }],
    backgroundColor: 'red' // Adjust color as needed
  }]
};

// Configuration options
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      callbacks: {
        label: function(tooltipItem) {
          return `X: ${tooltipItem.raw.x}, Y: ${tooltipItem.raw.y}, Base: ${tooltipItem.raw.base} yoo`;
        }
      }
    }
  },
  scales: {
    x: {
      beginAtZero: true
    },
    y: {
      beginAtZero: true
    }
  }
};

// Get the context of the canvas element we want to select
const ctx = document.getElementById('floating-bars-chart').getContext('2d');

// Create the chart
const floatingBarsChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options
});