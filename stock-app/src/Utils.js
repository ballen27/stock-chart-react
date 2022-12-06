export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (Math.random() * (max - min + 1) + min).toFixed(2); // The maximum is inclusive and the minimum is inclusive
}

const regenerateData = () => {
    const chartData = [];
    for (let i = 0; i < 20; i++) {
      const price = Math.floor(Math.random() * i + 13);
      chartData.push({
        date: i,
        price,
        tooltipContent: `<b>Date: </b>${i}<br><b>Price: </b>${price}`
      });
    }
    return chartData
  }

const quote = [ 
  {
    "symbol" : "MSFT",
    "name" : "Microsoft Corp",
    "price" : 149.55000000,
    "changesPercentage" : 0.38934135,
    "change" : 0.58000183,
    "dayLow" : 148.75000000,
    "dayHigh" : 151.41000000,
    "yearHigh" : 157.26000000,
    "yearLow" : 103.10000000,
    "marketCap" : 2472091320320.00000000,
    "priceAvg50" : 149.04265000,
    "priceAvg200" : 134.71935000,
    "volume" : 97750498,
    "avgVolume" : 78489468,
    "exchange" : "NASDAQ",
    "open" : 150.63000000,
    "previousClose" : 148.97000000,
    "eps" : 5.10800000,
    "pe" : 29.27760500,
    "earningsAnnouncement" : "2021-07-27T16:30:00.000+0000",
    "sharesOutstanding" : 16530199400,
    "timestamp" : 1631575899
  },
  {
    "symbol" : "AAPL",
    "name" : "Apple Inc.",
    "price" : 149.55000000,
    "changesPercentage" : 0.38934135,
    "change" : 0.58000183,
    "dayLow" : 148.75000000,
    "dayHigh" : 151.41000000,
    "yearHigh" : 157.26000000,
    "yearLow" : 103.10000000,
    "marketCap" : 2472091320320.00000000,
    "priceAvg50" : 149.04265000,
    "priceAvg200" : 134.71935000,
    "volume" : 97750498,
    "avgVolume" : 78489468,
    "exchange" : "NASDAQ",
    "open" : 150.63000000,
    "previousClose" : 148.97000000,
    "eps" : 5.10800000,
    "pe" : 29.27760500,
    "earningsAnnouncement" : "2021-07-27T16:30:00.000+0000",
    "sharesOutstanding" : 16530199400,
    "timestamp" : 1631575899
  },
  {
    "symbol" : "AMZN",
    "name" : "Amazon.com Inc.",
    "price" : 149.55000000,
    "changesPercentage" : 0.38934135,
    "change" : 0.58000183,
    "dayLow" : 148.75000000,
    "dayHigh" : 151.41000000,
    "yearHigh" : 157.26000000,
    "yearLow" : 103.10000000,
    "marketCap" : 2472091320320.00000000,
    "priceAvg50" : 149.04265000,
    "priceAvg200" : 134.71935000,
    "volume" : 97750498,
    "avgVolume" : 78489468,
    "exchange" : "NASDAQ",
    "open" : 150.63000000,
    "previousClose" : 148.97000000,
    "eps" : 5.10800000,
    "pe" : 29.27760500,
    "earningsAnnouncement" : "2021-07-27T16:30:00.000+0000",
    "sharesOutstanding" : 16530199400,
    "timestamp" : Date.now()
  }   
]

const testDate = new Date(quote[2].timestamp)
const formattedDate = testDate.toLocaleString("en-US", {
  day: "2-digit",
  month: "short",
  hour: "numeric",
  minute: "2-digit"
});
console.log(formattedDate)

export const requestStockQuote = () => {
  return quote
}

export const generateQuote = () => {
  const quoteData = []
  const msftPrice = parseFloat(getRandomIntInclusive(230.00, 260.00))
  const aaplPrice = parseFloat(getRandomIntInclusive(130.00, 165.00))
  const amznPrice = parseFloat(getRandomIntInclusive(90.00, 100.00))
  const timestamp = Date.now()
  quoteData.push(
    {
      symbol : "MSFT",
      name : "Microsoft Corp",
      price : msftPrice,
      changesPercentage : 0.38934135,
      change: 0.58000183,
      volume : 97750498,
      exchange : "NASDAQ",
      open : 150.63000000,
      timestamp : timestamp
    },
    {
      symbol : "AAPL",
      name : "Apple Inc",
      price : aaplPrice,
      changesPercentage : 0.38934135,
      change: 0.58000183,
      volume : 97750498,
      exchange : "NASDAQ",
      open : 150.63000000,
      timestamp : timestamp
    },
    {
      symbol : "AMZN",
      name : "Amazon.com Inc",
      price : amznPrice,
      changesPercentage : 0.38934135,
      change: 0.58000183,
      volume : 97750498,
      exchange : "NASDAQ",
      open : 150.63000000,
      timestamp : timestamp
    },
  )
  return quoteData
}

// export const stockData = regenerateData()
export const stockData = generateQuote()