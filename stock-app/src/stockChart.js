import React, { useEffect } from 'react';
import * as d3 from 'd3';

import './index.css';

function StockChart({ data, width, height }) {

  useEffect(() => {
    drawChart();
  });
  
  function drawChart() {

    d3.select('#container')
      .select('svg')
      .remove();
    d3.select('#container')
      .select('.tooltip')
      .remove();

    const margin = { top: 50, right: 50, bottom: 50, left: 50 };
    const yMinValue = d3.min(data, d => d.price);
    const yMaxValue = d3.max(data, d => d.price);
    const xMinValue = d3.min(data, d => d.date);
    const xMaxValue = d3.max(data, d => d.date);

    const svg = d3
        .select('#container')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    const xScale = d3
        .scaleLinear()
        .domain([xMinValue, xMaxValue])
        .range([0, width]);

    const yScale = d3
        .scaleLinear()
        .range([height, 0])
        .domain([0, yMaxValue]);
        
    const line = d3
        .line()
        .x(d => xScale(d.date))
        .y(d => yScale(d.price))
            
    
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
        .call(d3.axisBottom().scale(xScale).tickSize(0));

    svg
        .append('g')
        .attr('class', 'y-axis')
        .attr('transform', `translate(-10,0)`)
        .call(d3.axisLeft(yScale).tickSize(0));

    svg
        .append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('class', 'line') 
        .attr('d', line);

    //Setup tooltip
    const focus = svg
        .append('g')
        .attr('class', 'focus')
        .style('display', 'none');

    focus.append('circle')
        .attr('r', 5)
        // .attr('class', 'circle');

    const tooltip = d3
        .select('#container')
        .append('div')
        .attr('class', 'tooltip')
        .style("opacity", 0);

    //invisible rectangle to catch mouse events for tooltip hovering
    svg
        .append("rect")
        .attr("class", "overlay")
        .attr("width", width)
        .attr("height", height)
        .style("opacity", 0)
        .on("mouseover", function() { focus.style("display", null); tooltip.style("display", null);  })
        .on("mouseout", function() { focus.style("display", "none"); tooltip.style("display", "none"); })
        .on("mousemove", mousemove);

        function mousemove(event) {
            const bisect = d3.bisector(d => d.date).left;
            const xPos = d3.mouse(this)[0]; 
            const x0 = bisect(data, xScale.invert(xPos));
            const d0 = data[x0];
            focus.attr(
                'transform',
                `translate(${xScale(d0.date)},${yScale(d0.price)})`,
            );
            tooltip
                .transition()
                .duration(200)
                .style('opacity', 0.9);
            tooltip
                .html(d0.tooltipContent || d0.date)
                .style(
                    'transform',
                    `translate(${xScale(d0.date) + 50}px,${yScale(d0.price) - 330}px)`,
                );
        }
  }
  return <div id="container" />;
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
//           d.price = +d.price;
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
//         y.domain([0, d3.max(data, (d) => { return d.price; })]);
      
//         svg.append("g")
//           .attr("transform", `translate(0, ${height})`)
//           .call(d3.axisBottom(x));
    
//         svg.append("g")
//           .call(d3.axisLeft(y));
          
//         // add the Line
//         const valueLine = d3.line()
//         .x((d) => { return x(d.date); })
//         .y((d) => { return y(d.price); });
      
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