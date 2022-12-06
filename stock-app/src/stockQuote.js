import './index.css'
import React from "react";
import StockChart from './stockChart';
import {stockData, getRandomIntInclusive, dummyChartAapl, dummyChartAmzn, dummyChartMsft} from './Utils'


const StockQuote = ({quote}) => {


  const stocks = {
    MSFT: {
      logo: 'https://api.twelvedata.com/logo/microsoft.com',
      tooltipContent: `<b>date: </b>${quote.timestamp}<br><b>price: </b>${quote.price}`,
      data: dummyChartMsft
    },
    AAPL: {
      logo: 'https://financialmodelingprep.com/image-stock/AAPL.png',
      tooltipContent: `<b>date: </b>${quote.timestamp}<br><b>price: </b>${quote.price}`,
      data: dummyChartAapl
    },
    AMZN: {
      logo: 'https://financialmodelingprep.com/image-stock/AMZN.png',
      tooltipContent: `<b>date: </b>${quote.timestamp}<br><b>price: </b>${quote.price}`,
      data: dummyChartAmzn
    }
  }

  return (
      <div>
        <div style={styles.mainContainer}>
          <div style={styles.priceContainer}>
            <div style={styles.priceHeader}>
              <img alt="logo" style={styles.logo} src={stocks[quote.symbol].logo} />
              <div style={styles.priceName}>
                <h2>{quote.name}</h2>
                <p>{`${quote.exchange}: ${quote.symbol}`}</p>
              </div>
            </div>
            <div style={styles.price}>
              <h1>{`$${quote.price.toFixed(2)}`}</h1>
              <p>{`$${quote.change.toFixed(2)} (${quote.changesPercentage.toFixed(1)}%)`}</p>
            </div>
          </div>
          <div style={styles.chartContainer}>
            <div style={styles.dateSelectContainer}>
              <div style={styles.dateSelect}>
                <p>24 H</p>
              </div>
              <div style={styles.dateDeselect}>
                <p>7D</p>
              </div>
              <div style={styles.dateDeselect}>
                <p>30D</p>
              </div>
              <div style={styles.dateDeselect}>
                <p>1Y</p>
              </div>
            </div>
            <StockChart  data={stocks[quote.symbol].data} width={700} height={300} name={quote.symbol} />
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
  },
  dateSelectContainer: {
    display: 'flex',
    margin: '16px 8px',
  },
  dateSelect: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#fff',
    lineHeight: '30px',
    width: '55px',
    height: '35px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: '8px',
    margin: '0 8px',
  },
  dateDeselect: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#000',
    lineHeight: '30px',
    width: '55px',
    height: '35px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    borderRadius: '8px',
    margin: '0 8px',
  }
}
  
  export default StockQuote;