import './index.css'
import React, { useEffect, useState } from "react";
import StockChart from './stockChart';


const StockQuote = ({stockName}) => {

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   regenerateData()
  // })

  function regenerateData() {
    const chartData = [];
    for (let i = 0; i < 20; i++) {
      const value = Math.floor(Math.random() * i + 3);
      chartData.push({
        label: i,
        value,
        tooltipContent: `<b>Date: </b>${i}<br><b>Price: </b>${value}`
      });
    }
    setData(chartData)
  }

  const stocks = {
    microsoft: {
      name: 'Microsoft Corp',
      ticker: 'NASDAQ: MSFT',
      logo: 'https://api.twelvedata.com/logo/microsoft.com',
      price: '$240.23'
    },
    apple: {
      name: 'Apple Inc',
      ticker: 'NASDAQ: AAPL',
      logo: 'https://financialmodelingprep.com/image-stock/AAPL.png',
      price: '$101.01'
    },
    amazon: {
      name: 'Amazon.com Inc',
      ticker: 'NASDAQ: AMZN',
      logo: 'https://financialmodelingprep.com/image-stock/AMZN.png',
      price: '$91.01'
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
            <div style={styles.price}>
              <h1>{stocks[stockName].price}</h1>
            </div>
          </div>
          <div style={styles.chartContainer}>
            <button onClick={regenerateData}>Change Data</button>
            <StockChart  data={data} width={600} height={300}/>
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
    width: '700px',
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
  price: {
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