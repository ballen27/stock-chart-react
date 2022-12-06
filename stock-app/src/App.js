import StockQuote from './stockQuote';
import './index.css'

function App() {
  return (
    <div className="App">
      <div className='pageTitle'>
        <h1>Stock Price & Performance</h1>
        <p>Real-time stock tracker for MSFT, AAPL, AMZN</p>
      </div>
      <StockQuote stockName={'microsoft'}/>
      <StockQuote stockName={'apple'}/>
      <StockQuote stockName={'amazon'}/>
    </div>
  );
}

export default App;
