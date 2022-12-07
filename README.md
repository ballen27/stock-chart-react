# stock-chart-react
A small react app that displays stock prices for three companies and a chart

The comapnies tracked are Microsoft(MSFT), Apple(AAPL), Amazon(AMZN)

The stock price updates automatically using a random number generator and a setInterval() of 5 seconds.
The price change and price change percentage also update automatically using a random number generator.

The price, price change, and price change percentage are not related to eachother (thought they would be when working with real API data)

The chart is built with D3
The chart displays a set of prices and times based on the selected time frame filters above the chart (the filters are not really functional)

The Chart is not related to the price (though it would be when working with real API data)

Data:
All of the data used to update the price, price change, price change percentage and the chart is based on the structure of a response from the FMP API https://site.financialmodelingprep.com/developer

I looked into using the Morningstar API but was unable to find a developer/test account signup. 
