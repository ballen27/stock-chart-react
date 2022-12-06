export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (Math.random() * (max - min + 1) + min).toFixed(2); // The maximum is inclusive and the minimum is inclusive
}


export const generateQuote = () => {
  const quoteData = []
  const msftPrice = parseFloat(getRandomIntInclusive(230.00, 260.00))
  const aaplPrice = parseFloat(getRandomIntInclusive(130.00, 165.00))
  const amznPrice = parseFloat(getRandomIntInclusive(90.00, 100.00))
  const timestamp = Date.now()
  const formattedTimestamp = timestamp.toLocaleString("en-US", {
    day: "2-digit",
    month: "short",
    hour: "numeric",
    minute: "2-digit"
  });
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
      timestamp : formattedTimestamp
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
      timestamp : formattedTimestamp
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
      timestamp : formattedTimestamp
    },
  )
  return quoteData
}

// export const stockData = regenerateData()
export const stockData = generateQuote()

export const generateChart = () => {
  let initialChart = generateQuote()
  let chartData = [...initialChart]
}

generateChart()

export const dummyChartMsft = [
  {
    "date" : "2020-03-02 15:59:01",
    "open" : 297.230000000000,
    "low" : 297.230000000000,
    "high" : 298.280000000000,
    "close" : 298.252300000000,
    "volume" : 78679246
  }, 
  {
    "date" : "2020-03-02 15:58:00",
    "open" : 296.990000000000,
    "low" : 296.190000000000,
    "high" : 297.430000000000,
    "close" : 297.230000000000,
    "volume" : 77982786
  }, 
  {
    "date" : "2020-03-02 15:57:00",
    "open" : 295.860000000000,
    "low" : 295.860000000000,
    "high" : 296.580000000000,
    "close" : 296.190000000000,
    "volume" : 77400704
  }, 
  {
    "date" : "2020-03-02 15:56:00",
    "open" : 297.100000000000,
    "low" : 295.578600000000,
    "high" : 297.100000000000,
    "close" : 295.860000000000,
    "volume" : 76885430
  },
  {
    "date" : "2020-03-02 15:55:00",
    "open" : 297.230000000000,
    "low" : 297.230000000000,
    "high" : 298.280000000000,
    "close" : 298.252300000000,
    "volume" : 78679246
  }, 
  {
    "date" : "2020-03-02 15:54:00",
    "open" : 296.190000000000,
    "low" : 296.190000000000,
    "high" : 297.430000000000,
    "close" : 297.230000000000,
    "volume" : 77982786
  }, 
  {
    "date" : "2020-03-02 15:53:00",
    "open" : 295.860000000000,
    "low" : 295.860000000000,
    "high" : 296.580000000000,
    "close" : 296.190000000000,
    "volume" : 77400704
  }, 
  {
    "date" : "2020-03-02 15:52:00",
    "open" : 297.100000000000,
    "low" : 295.578600000000,
    "high" : 297.100000000000,
    "close" : 295.860000000000,
    "volume" : 76885430
  },
]
export const dummyChartAapl = [
  {
    "date" : "2020-03-02 15:59:01",
    "open" : 297.230000000000,
    "low" : 297.230000000000,
    "high" : 298.280000000000,
    "close" : 298.252300000000,
    "volume" : 78679246
  }, 
  {
    "date" : "2020-03-02 15:58:00",
    "open" : 296.190000000000,
    "low" : 296.190000000000,
    "high" : 297.430000000000,
    "close" : 297.230000000000,
    "volume" : 77982786
  }, 
  {
    "date" : "2020-03-02 15:57:00",
    "open" : 295.860000000000,
    "low" : 295.860000000000,
    "high" : 296.580000000000,
    "close" : 296.190000000000,
    "volume" : 77400704
  }, 
  {
    "date" : "2020-03-02 15:56:00",
    "open" : 298.100000000000,
    "low" : 295.578600000000,
    "high" : 297.100000000000,
    "close" : 295.860000000000,
    "volume" : 76885430
  },
  {
    "date" : "2020-03-02 15:55:00",
    "open" : 297.230000000000,
    "low" : 297.230000000000,
    "high" : 298.280000000000,
    "close" : 298.252300000000,
    "volume" : 78679246
  }, 
  {
    "date" : "2020-03-02 15:54:00",
    "open" : 296.190000000000,
    "low" : 296.190000000000,
    "high" : 297.430000000000,
    "close" : 297.230000000000,
    "volume" : 77982786
  }, 
  {
    "date" : "2020-03-02 15:53:00",
    "open" : 295.860000000000,
    "low" : 295.860000000000,
    "high" : 296.580000000000,
    "close" : 296.190000000000,
    "volume" : 77400704
  }, 
  {
    "date" : "2020-03-02 15:52:00",
    "open" : 297.100000000000,
    "low" : 295.578600000000,
    "high" : 297.100000000000,
    "close" : 295.860000000000,
    "volume" : 76885430
  },
]
export const dummyChartAmzn = [
  {
    "date" : "2020-03-02 15:59:01",
    "open" : 297.230000000000,
    "low" : 297.230000000000,
    "high" : 298.280000000000,
    "close" : 298.252300000000,
    "volume" : 78679246
  }, 
  {
    "date" : "2020-03-02 15:58:00",
    "open" : 296.190000000000,
    "low" : 296.190000000000,
    "high" : 297.430000000000,
    "close" : 297.230000000000,
    "volume" : 77982786
  }, 
  {
    "date" : "2020-03-02 15:57:00",
    "open" : 295.860000000000,
    "low" : 295.860000000000,
    "high" : 296.580000000000,
    "close" : 296.190000000000,
    "volume" : 77400704
  }, 
  {
    "date" : "2020-03-02 15:56:00",
    "open" : 297.100000000000,
    "low" : 295.578600000000,
    "high" : 297.100000000000,
    "close" : 295.860000000000,
    "volume" : 76885430
  },
  {
    "date" : "2020-03-02 15:55:00",
    "open" : 297.230000000000,
    "low" : 297.230000000000,
    "high" : 298.280000000000,
    "close" : 298.252300000000,
    "volume" : 78679246
  }, 
  {
    "date" : "2020-03-02 15:54:00",
    "open" : 296.190000000000,
    "low" : 296.190000000000,
    "high" : 297.430000000000,
    "close" : 297.230000000000,
    "volume" : 77982786
  }, 
  {
    "date" : "2020-03-02 15:53:00",
    "open" : 299.860000000000,
    "low" : 295.860000000000,
    "high" : 296.580000000000,
    "close" : 296.190000000000,
    "volume" : 77400704
  }, 
  {
    "date" : "2020-03-02 15:52:00",
    "open" : 297.100000000000,
    "low" : 295.578600000000,
    "high" : 297.100000000000,
    "close" : 295.860000000000,
    "volume" : 76885430
  },
]