
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const MyVisual3Chart = () => {
  const [carbonData, setCarbonData] = useState([]);
  const [gastData, setGastData] = useState([]);
  const [humanData, setHumanData] = useState([]);
  const [showHumanActions, setShowHumanActions] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/carbon")
      .then(response => response.json())
      .then(result => {
        setCarbonData(result);
      })
      .catch(error => console.log(error));

    fetch("http://localhost:8080/gast")
      .then(response => response.json())
      .then(result => {
        setGastData(result);
      })
      .catch(error => console.log(error));

    fetch("http://localhost:8080/humanactivities")
      .then(response => response.json())
      .then(result => {
        setHumanData(result);
      })
      .catch(error => console.log(error));
  }, []);

  const getCombinedDataForChart = () => {
    const data = {
      labels: gastData.map(item => item.time),
      datasets: [
        {
          label: "CO2 ppm",
          yAxisID: "left-axis",
          data: carbonData.map(item => item.carbondioxide),
          borderColor: "#FF4136",
          backgroundColor: "rgba(255, 65, 54, 0.2)",
          fill: false,
          pointRadius: 0,
          pointHoverRadius: 0,
          pointHitRadius: 0,
          pointBorderWidth: 0,
        },
        {
          label: "Human actions",
          data: humanData.map(item =>  item.event),
          borderColor: "transparent",
          backgroundColor: "transparent",
          pointRadius: 10,
          pointHoverRadius: 10,
          pointHitRadius: 10,
          pointBorderWidth: 10,
          pointBackgroundColor: "rgba(61, 153, 112, 0.2)",
          pointBorderColor: "#3D9970",
          pointStyle: "circle",
        },
        {
          label: "Surface temperature change",
          yAxisID: "right-axis",
          data: gastData.map(item => item.fifty),
          borderColor: "#0074D9",
          backgroundColor: "rgba(0, 116, 217, 0.2)",
          fill: false,
          pointRadius: 0,
          pointHoverRadius: 0,
          pointHitRadius: 0,
          pointBorderWidth: 0,
        },
      ],
    };
    return data;
  };

  useEffect(() => {
    Chart.register({
      id: "left-axis",
      type: "linear",
      position: "left",
      gridLines: {
        drawOnChartArea: false,
      },
      ticks: {
        beginAtZero: true,
      },
      scaleLabel: {
        display: true,
        labelString: "CO2 ppm",
      },
    });

    Chart.register({
      id: "right-axis",
      type: "linear",
      position: "right",
      gridLines: {
        drawOnChartArea: false,
      },
      ticks: {
        beginAtZero: true,
      },
      scaleLabel: {
        display: true,
        labelString: "Surface temperature change",
      },
    });
    Chart.register({
      id: "category",
      type: "category",
      position: "bottom",
      display: false,
      ticks: {
        autoSkip: false,
        maxRotation: 90,
        minRotation: 90,
        padding: 5,
      },
    });
    }, []);const options = {
      plugins: {
      legend: {
      position: "top",
      },
      title: {
      display: true,
      text: "Climate Change Visualization",
      font: {
      size: 20,
      weight: "bold",
      },
      },
      },
      scales: {
      yAxes: [
      {
      id: "left-axis",
      type: "linear",
      position: "left",
      },
      {
      id: "right-axis",
      type: "linear",
      position: "right",
      },
      ],
      xAxes: [
      {
      id: "category",
      type: "category",
      position: "bottom",
      },
      ],
      },
      };
      
      return (
      <>
      <Line data={getCombinedDataForChart()} options={options} />
      <div style={{ marginTop: "20px" }}>
      <button onClick={() => setShowHumanActions(!showHumanActions)}>
      {showHumanActions ? "Hide" : "Show"} human actions
      </button>
      </div>
      {showHumanActions && (
      <div style={{ marginTop: "20px" }}>
      <h3>Human Actions</h3>
      <ul>
      {humanData.map((item, index) => (
      <li key={index}>{item.event}</li>
      ))}
      </ul>
      </div>
      )}
      </>
      );
      };
      
      export default MyVisual3Chart;