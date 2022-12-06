import StockQuote from './stockQuote';

function App() {
  return (
    <div className="App">
      <StockQuote stockName={'microsoft'}/>
      <StockQuote stockName={'apple'}/>
      <StockQuote stockName={'amazon'}/>
    </div>
  );
}

export default App;
