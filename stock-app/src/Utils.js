export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
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

export const stockData = regenerateData()

// export const stockData = [
//   {
//     date: new Date(),
//     price: getRandomIntInclusive(230.00, 260.00),
//     tooltipContent: `<b>date: </b>${10}<br><b>price: </b>${this.price}`
//   }
// ]

export const dummyStockData = [
    {
      "date" : "2020-03-02 15:59:00",
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

const testDate = new Date(dummyStockData[0].date)
const formattedDate = testDate.toLocaleString("en-US", {
  day: "2-digit",
  month: "short",
  hour: "numeric",
  minute: "2-digit"
});
console.log(formattedDate)