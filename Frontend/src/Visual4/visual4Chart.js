import React, { useState, useEffect, useRef } from 'react';
import { Chart } from 'chart.js';
import { Line } from 'react-chartjs-2';
import Popup from 'reactjs-popup';


const Visual4Chart = () => {
  const [chartData, setChartData] = useState(null);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const fetchDataAndCreateChart = async () => {
      try {
        const response = await fetch('http://localhost:8080/v4data');
        const rawData = await response.text();

        const lastChar = rawData[rawData.length - 1];
        let fixedData;

        if (lastChar === '}' || lastChar === ']') {
          fixedData = rawData;
        } else {
          fixedData = rawData.trim() + '}';
        }

        const data = JSON.parse(fixedData);
        const allCountries = Object.keys(data[0]).filter(key => key !== 'year');

        setChartData(data);
        setAllCountries(allCountries);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataAndCreateChart();
  }, []);

  useEffect(() => {
    if (chartData && chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      
      const datasets = selectedCountries.map((country, index) => ({
        label: country,
        data: chartData.map(item => item[country]),
        borderColor: `hsl(${360 / selectedCountries.length * index}, 100%, 50%)`,
        fill: false,
      }));

      const chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: chartData.map(item => item.year),
          datasets,
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      chartInstanceRef.current = chart;
    }
  }, [chartData, selectedCountries]);

  const handleCountryChange = (event) => {
    const { value } = event.target;
    setSelectedCountries(prevState => {
      if (prevState.includes(value)) {
        return prevState.filter(country => country !== value);
      }
      return [...prevState, value];
    });
  };
  
  const popuptext=(<div id="popup">
    <h1>Visual 4 Information</h1>
    <p>
      This chart displays data for selected countries. You can select multiple countries from the dropdown menu to compare their data.
    </p>
  </div>);

  return (
    <div>
      <div className="chart">
        {chartData && (
          <Line
            data={{
              labels: chartData.map(item => item.year),
              datasets: selectedCountries.map((country, index) => ({
                label: country,
                data: chartData.map(item => item[country]),
                borderColor: `hsl(${360 / selectedCountries.length * index}, 100%, 50%)`,
                fill: false,
              })),
            }}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        )}
        <select onChange={handleCountryChange}>
          <option>Select a country</option>
          {allCountries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      
      <div style={{ marginTop: '20px' }}>
        <div id="infotext">
          <p>
            Here is a line chart showing selected countries' data. You can select multiple countries to compare their data.
          </p>
        </div>
      </div>
      <Popup trigger={<button id="exit">Info</button>} position="right center">
        <div>{popuptext}</div>
      </Popup>
    </div></div>
  );
}; 

export default Visual4Chart;
