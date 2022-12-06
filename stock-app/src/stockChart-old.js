import { labels, newDate, getRandomInt } from './Utils.js'

const aapl = document.getElementById('aaplChart');
const msft = document.getElementById('msftChart');
const amzn = document.getElementById('amznChart');

let priceArray = []

const populateChart = () => {
    priceArray.push(getRandomInt(230, 260))
    return priceArray
}

// setInterval(populateChart, 5000)

const data = {
    labels: [ // Date Objects
    newDate(),
    newDate(),
    newDate(),
    newDate(),
    newDate(),
    newDate(3),
    newDate(),
    // newDate(0),
    // newDate(1),
    // newDate(2),
    // newDate(3),
    // newDate(4),
    // newDate(5),
    // newDate(6)
  ],
    datasets: [{
      label: 'Microsoft (MSFT)',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'green',
    }]
  };

  new Chart(msft, {
    type: 'line',
    data: data,
    scales: {
        x: {
          type: 'time',
          time: {
            // Luxon format string
            tooltipFormat: 'HH:mm'
          },
          title: {
            display: true,
            text: 'Date'
          }
        },
        y: {
          title: {
            display: true,
            text: 'value'
          }
        }
      },
    
  });

  new Chart(aapl, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
        label: 'Apple (AAPL)',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'blue',
        }]
    },
  });

  new Chart(amzn, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
        label: 'Amazon (AMZN)',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'orange',
        }]
    },
  });

