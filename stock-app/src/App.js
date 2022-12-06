import { useEffect, useState } from 'react';
import StockQuote from './stockQuote';
import './index.css'
import { generateQuote } from './Utils'

function App() {

  const [stockData, setStockData] = useState(generateQuote)

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     setStockData(generateQuote)
  //   }, 5000)

  //   return () => clearInterval(interval)
  // }, [stockData])

  return (
    <div className="App">
      <div className='pageTitle'>
        <h1>Stock Price & Performance</h1>
        <p>Real-time stock tracker for MSFT, AAPL, AMZN</p>
      </div>
      {stockData.map((data, i) => (
        <StockQuote key={i} symbol={data.symbol} quote={data}/>
      ))}
    </div>
  );
}

export default App;
