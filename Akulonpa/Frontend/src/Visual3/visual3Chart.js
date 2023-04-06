import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const CarbonChart = () => {
  const [carbonData, setCarbonData] = useState([]);
  const [gastData, setGastData] = useState([]);
  const [humanActionsData, setHumanActionsData] = useState([]);
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

    fetch("http://localhost:8080/humanactions")
      .then(response => response.json())
      .then(result => {
        setHumanActionsData(result);
      })
      .catch(error => console.log(error));
  }, []);

  const carbonLabels = carbonData.map(item => item.time);
  const carbonValues = carbonData.map(item => item.carbondioxide);
  const gastLabels = gastData.map(item => item.time);
  const gastValues = gastData.map(item => item.fifty);
  const humanActionsLabels = humanActionsData.map(item => item.time);
  const humanActionsValues = humanActionsData.map(item => item.action);

  const chartData = {
    labels: showHumanActions ? humanActionsLabels : carbonLabels,
    datasets: [
      {
        label: "CO2 ppm",
        yAxisID: "left-axis",
        data: carbonValues,
        borderColor: "red",
        fill: false
      },
      {
        label: "Surface temperature change",
        yAxisID: "right-axis",
        data: gastValues,
        borderColor: "blue",
        fill: false
      },
      showHumanActions && {
        label: "Human actions",
        data: humanActionsValues,
        borderColor: "green",
        fill: false
      }
    ].filter(Boolean)
  };

  const options = {
    scales: {
      yAxes: [
        {
          id: "left-axis",
          type: "linear",
          position: "left"
        },
        {
          id: "right-axis",
          type: "linear",
          position: "right",
          ticks: {
            callback: function (value, index, values) {
              return value + "°C";
            }
          }
        }
      ]
    }
  };

  return (
    <div>
      <button onClick={() => setShowHumanActions(!showHumanActions)}>
        {showHumanActions ? "Hide human actions" : "Show human actions"}
      </button>
      <Line data={chartData} options={options} width={500} height={500} />
    </div>
  );
};

export default CarbonChart;
