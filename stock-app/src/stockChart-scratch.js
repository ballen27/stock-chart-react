

// import React, { useEffect } from 'react';
// import * as d3 from 'd3';

// import './index.css';

// function StockChart({ data, name }) {

// const container = `#container-${name}`

// data.forEach(function(d) {
//     d.date = new Date(d.date);
// });
    
//     useEffect(() => {
//         drawChart();
//     });
    
// function drawChart() {

//     d3.select(container)
//       .select('svg')
//       .remove();
//     d3.select(container)
//       .select('.tooltip')
//       .remove();

//     const margin = { top: 50, right: 50, bottom: 50, left: 50 },
//     width = 700 - margin.left - margin.right,
//     height = 300 - margin.top - margin.bottom;

//     const yMinValue = d3.min(data, d => (d.open.toFixed(2)));
//     const yMaxValue = d3.max(data, d => (d.open.toFixed(2)));
//     const xMinValue = d3.min(data, d => d.date);
//     const xMaxValue = d3.max(data, d => d.date);

//     console.log(xMinValue, xMaxValue)
//     const bisectDate = d3.bisector(function(d) { return d.date; }).left,
//         formatValue = d3.format(","),
//         dateFormatter = d3.timeFormat("%m/%d/%y");

//     const x = d3
//     .scaleTime()
//     .domain([xMinValue, xMaxValue])
//     .range([0, width]);

//     const y = d3
//     .scaleLinear()
//     .range([height, 0])
//     .domain([yMinValue, yMaxValue]);

//     const xAxis = d3
//     .axisBottom(x)
//     .tickSize(0)
//     .tickFormat('')

//     const yAxis = d3
//     .axisLeft(y)
//     .tickSize(0)
//     .tickFormat(x => `$${x.toFixed(2)}`);


//     //add the Line
//         const line = d3.line()
//         .x((d) => { return x(d.date); })
//         .y((d) => { return y(d.open); });

//     const svg = d3
//         .select(container)
//         .append('svg')
//         .attr('width', width + margin.left + margin.right)
//         .attr('height', height + margin.top + margin.bottom)
//         .append('g')
//         .attr('transform', `translate(${margin.left},${margin.top})`);

//     const tooltip = d3
//         .select(container)
//         .append('div')
//         .attr('class', 'tooltip');

//         svg
//         .append('g')
//         .attr('class', 'grid')
//         .call(
//             d3.axisLeft(y)
//             .tickSize(-width)
//             .tickFormat(''),
//         );

//         svg.append("g")
//             .attr("class", "x-axis")
//             .attr("transform", "translate(0," + height + ")")
//             .call(xAxis);

//         svg.append("g")
//             .attr("class", "y-axis")
//             .attr('transform', `translate(-10,0)`)
//             .call(yAxis)

//         svg.append('path')
//             .datum(data)
//             .attr('fill', 'none')
//             .attr('class', 'line') 
//             .attr('d', line);

//         const focus = svg.append("g")
//             .attr("class", "focus")
//             .style("display", "none");

//         focus.append("circle")
//             .attr("r", 5);

//         const tooltipLikes = tooltip.append("div");
        
//         tooltipLikes.append("span")
//             .attr("class", "tooltip-title")
//             .text("price: ");

//         svg.append("rect")
//             .attr("class", "overlay")
//             .attr("width", width)
//             .attr("height", height)
//             .on("mouseover", function() { focus.style("display", null); tooltip.style("display", null);  })
//             .on("mouseout", function() { focus.style("display", "none"); tooltip.style("display", "none"); })
//             .on("mousemove", mousemove);

//         function mousemove() {
//             const x0 = x.invert(d3.mouse(this)[0]),
//                 i = bisectDate(data, x0, 1),
//                 d0 = data[i - 1],
//                 d1 = data[i],
//                 d = x0 - new Date(d0.date) > new Date(d1.date) - x0 ? d1 : d0;
//             focus.attr("transform", "translate(" + x(new Date(d.date)) + "," + y(d.price) + ")");
//             tooltip.attr("style", "left:" + (x(d.date) + 64) + "px;top:" + y(d.price) + "px;");
//             tooltip.select(".tooltip-date").text(dateFormatter(d.date));
//             tooltip.select(".tooltip-price").text(formatValue(d.price));
//         }
// }
//   return <div id={`container-${name}`} style={{marginLeft: '20px'}} />;
// }

// export default StockChart;









import React, { useEffect } from 'react';
import * as d3 from 'd3';

import './index.css';

function StockChart({ data, width, height, name }) {

const container = `#container-${name}`
  useEffect(() => {
    drawChart();
  });
  
  function drawChart() {

    d3.select(container)
      .select('svg')
      .remove();
    d3.select(container)
      .select('.tooltip')
      .remove();


    const margin = { top: 50, right: 50, bottom: 50, left: 50 },
        width = 700 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;
    const yMinValue = d3.min(data, d => (d.open.toFixed(2)));
    const yMaxValue = d3.max(data, d => (d.open.toFixed(2)));
    const xMinValue = d3.min(data, d => d.date);
    const xMaxValue = d3.max(data, d => d.date);

    console.log('Min', xMinValue, "max", xMaxValue)
    const svg = d3
        .select(container)
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    const xScale = d3
        .scaleTime()
        .domain([xMinValue, xMaxValue])
        .range([0, width]);

    const yScale = d3
        .scaleLinear()
        .range([height, 0])
        .domain([yMinValue, yMaxValue]);
        
    const line = d3
        .line()
        .x(d => xScale(new Date(d.date)))
        .y(d => yScale(d.open))
            
    
    //Draw gridlines and tick markers
    svg
        .append('g')
        .attr('class', 'grid')
        .call(
            d3.axisLeft(yScale)
            .tickSize(-width)
            .tickFormat(''),
        );

    svg
        .append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0,${height + 20})`)
        .call(
            d3.axisBottom(xScale)
            .tickSize(0)
            .ticks(5));

    svg
        .append('g')
        .attr('class', 'y-axis')
        .attr('transform', `translate(-10,0)`)
        .call(
            d3.axisLeft(yScale)
            .tickSize(0)
            .tickFormat(x => `$${x.toFixed(2)}`));

    svg
        .append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('class', 'line') 
        .attr('d', line);

    //Setup tooltip could get it working
    const focus = svg
        .append('g')
        .attr('class', 'focus')
        .style('display', 'none');

    focus.append('circle')
        .attr('r', 5)
        .attr('class', 'circle');

    const tooltip = d3
        .select('#container')
        .append('div')
        .attr('class', 'tooltip')
        .style("opacity", 0);

    // //invisible rectangle to catch mouse events for tooltip hovering
    svg
        .append("rect")
        .attr("class", "overlay")
        .attr("width", width)
        .attr("height", height)
        .style("opacity", 0)
        .on("mouseover", function() { focus.style("display", null); tooltip.style("display", null);  })
        .on("mouseout", function() { focus.style("display", "none"); tooltip.style("display", "none"); })
        .on("mousemove", mousemove);
        const bisectDate = d3.bisector(d => {new Date(d.date)}).left;
        const dateFormatter = d3.timeFormat("%m/%d/%y");
        function mousemove() {
            var x0 = xScale.invert(d3.mouse(this)[0]),
                i = bisectDate(data, x0, 1),
                d0 = data[i - 1],
                d1 = data[i],
                d = x0 - d0.date > d1.date - x0 ? d1 : d0;
            focus.attr("transform", "translate(" + xScale(new Date(d.date)) + "," + yScale(d.open) + ")");
            console.log('bisectDate', bisectDate(data, x0, 1),)
            tooltip
                .transition()
                .duration(200)
                .style('opacity', 0.9);
            tooltip
                .html(d0.tooltipContent || d0.date)
                .style(
                    'transform',
                    `translate(${xScale(new Date(d0.date)) + 50}px,${yScale(d0.open) - 330}px)`,
                );
            focus.select(".tooltip-date").text(dateFormatter(d.date));
            focus.select(".tooltip-likes").text((d.price));
        }
        // function mousemove(event) {
        //     const bisect = d3.bisector(d => d.xScale).left;
        //     const x0 = xScale.invert(d3.mouse(this)[0])
        //     const i = bisect(data, x0, 1)
        //     const selectedData = data[i]
        //     // const xPos = d3.mouse(this)[0]; 
        //     // const x0 = bisect(data, xScale.invert(xPos));
        //     // const d0 = data[x0];
        //     console.log('selectedData', selectedData.date)
        //     // focus.attr(
        //     //     'transform',
        //     //     `translate(${xScale(new Date(d0.date))},${yScale(d0.open)})`,
        //     // );
        //     // tooltip
        //     //     .transition()
        //     //     .duration(200)
        //     //     .style('opacity', 0.9);
        //     // tooltip
        //     //     .html(d0.tooltipContent || d0.date)
        //     //     .style(
        //     //         'transform',
        //     //         `translate(${xScale(new Date(d0.date)) + 50}px,${yScale(d0.open) - 330}px)`,
        //     //     );
        // }
  }
  return <div id={`container-${name}`} style={{marginLeft: '20px'}} />;
}

export default StockChart;





















// import React, { useEffect } from "react";
// import * as d3 from 'd3'


// const StockChart = () => {

//     const createGraph = async () => {

//         // read data from csv and format constiables
//         let data = await d3.csv('https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv')
//         const parseTime = d3.timeParse("%Y-%m-%d");
      
//         data.forEach((d) => {
//           d.date = parseTime(d.date);
//           d.open = +d.open;
//         });
//         console.log(data) 
    
//         // set the dimensions and margins of the graph
//         const margin = { top: 20, right: 20, bottom: 50, left: 70 },
//         width = 960 - margin.left - margin.right,
//         height = 500 - margin.top - margin.bottom;
    
//         // append the svg object to the body of the page
//         const svg = d3.select(".chartContainer").append("svg")
//             .attr("width", width + margin.left + margin.right)
//             .attr("height", height + margin.top + margin.bottom)
//             .append("g")
//             .attr("transform", `translate(${margin.left}, ${margin.top})`);
    
//         // add X axis and Y axis
//         const x = d3.scaleTime().range([0, width]);
//         const y = d3.scaleLinear().range([height, 0]);
    
//         x.domain(d3.extent(data, (d) => { return d.date; }));
//         y.domain([0, d3.max(data, (d) => { return d.open; })]);
      
//         svg.append("g")
//           .attr("transform", `translate(0, ${height})`)
//           .call(d3.axisBottom(x));
    
//         svg.append("g")
//           .call(d3.axisLeft(y));
          
//         // add the Line
//         const valueLine = d3.line()
//         .x((d) => { return x(d.date); })
//         .y((d) => { return y(d.open); });
      
//         svg.append("path")
//           .data([data])
//           .attr("class", "line")
//           .attr("fill", "none")
//           .attr("stroke", "steelblue")
//           .attr("stroke-width", 1.5)
//           .attr("d", valueLine);
    
//       }
    
//       useEffect(() => {
//         createGraph();
//       }, []);
    
//       return (
//         <div style={styles.container} className={"chartContainer"}></div>
//       );
//   }

//   const styles = {
//     container: {
//         margin: ' 50px auto',
//         width: '90%',
//         boxShadow: `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`
//     }
//   }
  
//   export default StockChart;























// import React, { useEffect } from "react";
// import * as d3 from 'd3'


// const StockChart = () => {

//     const createGraph = async () => {

//         // read data from csv and format constiables
//         let data = await d3.csv('https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv')
//         const parseTime = d3.timeParse("%Y-%m-%d");
      
//         data.forEach((d) => {
//           d.date = parseTime(d.date);
//           d.open = +d.open;
//         });
//         console.log(data) 
    
//         // set the dimensions and margins of the graph
//         const margin = { top: 20, right: 20, bottom: 50, left: 70 },
//         width = 960 - margin.left - margin.right,
//         height = 500 - margin.top - margin.bottom;
    
//         // append the svg object to the body of the page
//         const svg = d3.select(".chartContainer").append("svg")
//             .attr("width", width + margin.left + margin.right)
//             .attr("height", height + margin.top + margin.bottom)
//             .append("g")
//             .attr("transform", `translate(${margin.left}, ${margin.top})`);
    
//         // add X axis and Y axis
//         const x = d3.scaleTime().range([0, width]);
//         const y = d3.scaleLinear().range([height, 0]);
    
//         x.domain(d3.extent(data, (d) => { return d.date; }));
//         y.domain([0, d3.max(data, (d) => { return d.open; })]);
      
//         svg.append("g")
//           .attr("transform", `translate(0, ${height})`)
//           .call(d3.axisBottom(x));
    
//         svg.append("g")
//           .call(d3.axisLeft(y));
          
//         // add the Line
//         const valueLine = d3.line()
//         .x((d) => { return x(d.date); })
//         .y((d) => { return y(d.open); });
      
//         svg.append("path")
//           .data([data])
//           .attr("class", "line")
//           .attr("fill", "none")
//           .attr("stroke", "steelblue")
//           .attr("stroke-width", 1.5)
//           .attr("d", valueLine);
    
//       }
    
//       useEffect(() => {
//         createGraph();
//       }, []);
    
//       return (
//         <div style={styles.container} className={"chartContainer"}></div>
//       );
//   }

//   const styles = {
//     container: {
//         margin: ' 50px auto',
//         width: '90%',
//         boxShadow: `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`
//     }
//   }
  
//   export default StockChart;