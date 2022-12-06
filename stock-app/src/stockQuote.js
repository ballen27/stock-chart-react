import './index.css'
import React from "react";
import StockChart from './stockChart';
import {stockData, getRandomIntInclusive} from './Utils'


const StockQuote = ({quote}) => {


  const stocks = {
    MSFT: {
      logo: 'https://api.twelvedata.com/logo/microsoft.com',
      tooltipContent: `<b>date: </b>${quote.timestamp}<br><b>price: </b>${quote.price}`
    },
    AAPL: {
      logo: 'https://financialmodelingprep.com/image-stock/AAPL.png',
      tooltipContent: `<b>date: </b>${quote.timestamp}<br><b>price: </b>${quote.price}`
    },
    AMZN: {
      logo: 'https://financialmodelingprep.com/image-stock/AMZN.png',
      tooltipContent: `<b>date: </b>${quote.timestamp}<br><b>price: </b>${quote.price}`
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
            {/* <StockChart  data={data} width={720} height={300}/> */}
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
  }
}
  
  export default StockQuote;