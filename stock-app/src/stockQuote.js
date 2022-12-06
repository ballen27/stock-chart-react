import './index.css'
import React, { useEffect, useState } from "react";
import StockChart from './stockChart';
import {stockData} from './Utils'


const StockQuote = ({stockName}) => {

  const [data, setData] = useState(stockData);

  // useEffect(() => {
  //   regenerateData()
  // })

  // setInterval( regenerateData, 5000)
  function regenerateData() {
    const chartData = [];
    for (let i = 0; i < 20; i++) {
      const price = Math.floor(Math.random() * i + 3);
      chartData.push({
        date: i,
        price,
        tooltipContent: `<b>date: </b>${i}<br><b>price: </b>${price}`
      });
    }
    setData(chartData)
  }

  // function regenerateData() {
  //   const chartData = [...data]
  //   console.log(chartData.length - 1)
  //   const lastDate = chartData[chartData.length - 1]
  //   const price = getRandomIntInclusive(230.00, 260.00)
  //   chartData.push({
  //     date: lastDate + 1,
  //     price,
  //     tooltipContent: `<b>date: </b>${10}<br><b>price: </b>${price}`
  //   });
  //   console.log(chartData)
  //   setData(chartData)
  // }

  const stocks = {
    microsoft: {
      name: 'Microsoft Corp',
      ticker: 'NASDAQ: MSFT',
      logo: 'https://api.twelvedata.com/logo/microsoft.com',
      date: '$240.23'
    },
    apple: {
      name: 'Apple Inc',
      ticker: 'NASDAQ: AAPL',
      logo: 'https://financialmodelingprep.com/image-stock/AAPL.png',
      date: '$101.01'
    },
    amazon: {
      name: 'Amazon.com Inc',
      ticker: 'NASDAQ: AMZN',
      logo: 'https://financialmodelingprep.com/image-stock/AMZN.png',
      date: '$91.01'
    }
  }

  return (
      <div>
        <div style={styles.mainContainer}>
          <div style={styles.priceContainer}>
            <div style={styles.priceHeader}>
              <img alt="logo" style={styles.logo} src={stocks[stockName].logo} />
              <div style={styles.priceName}>
                <h2>{stocks[stockName].name}</h2>
                <p>{stocks[stockName].ticker}</p>
              </div>
            </div>
            <div style={styles.date}>
              <h1>{stocks[stockName].date}</h1>
              <p>$1.03 &#40;1.3%&#41;</p>
            </div>
          </div>
          <div style={styles.chartContainer}>
            <button onClick={regenerateData}>Change Data</button>
            <StockChart  data={data} width={720} height={300}/>
          </div>
        </div>
      </div>
  )
}

const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '24px',
    width: '800px',
    margin: '50px auto',
    backgroundColor: '#f7f7f7',
  },
  priceContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderRadius: '8px',
  },
  priceHeader: {
    display: 'flex',
    alignItems: 'flex-start'
  },
  priceName: {
    margin: '8px auto',
  },
  date: {
    margin: '8px 16px',
  },
  chartContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '8px',
  },
  logo: {
    width: '50px',
    margin: '16px',
  }
}
  
  export default StockQuote;