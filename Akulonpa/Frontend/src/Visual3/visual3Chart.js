import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

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
    const filteredCarbonData = carbonData.filter(item => item !== null); // filter out null values
    const filteredHumanData = humanData.filter(item => item !== null); // filter out null values
    const data = {
      labels: filteredCarbonData.map(item => item?.time),
      datasets: [
        {
          label: "CO2 ppm",
          yAxisID: "left",
          data: filteredCarbonData.map(item => item?.carbondioxide),
          borderColor: "#FF4136",
          backgroundColor: "rgba(255, 65, 54, 0.2)",
          fill: true,
        },
        {
          label: "Surface temperature change",
          yAxisID: "right",
          data: gastData.map(item => item.fifty),
          borderColor: "#0074D9",
          backgroundColor: "rgba(0, 116, 217, 0.2)",
          fill: false,
        },
        {
          label: "Human actions",
          data: filteredHumanData.map(item => ({x: item?.time, y: item?.action})),
          borderColor: "transparent",
          backgroundColor: "transparent",
          pointRadius: 5,
          pointHoverRadius: 8,
          pointHitRadius: 10,
          pointBorderWidth: 2,
          pointBackgroundColor: "rgba(61, 153, 112, 0.2)",
          pointBorderColor: "#3D9970",
          showLine: false,
        },
      ],
    };
    return data;
  };

  const chartOptions = {
    scales: {
      yAxes: [
        {
          id: "left",
          type: "linear",
          position: "left",
          scaleLabel: {
            display: true,
            labelString: "CO2 ppm",
          },
        },
        {
          id: "right",
          type: "linear",
          position: "right",
          scaleLabel: {
            display: true,
            labelString: "Surface temperature change",
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Years or thousands of years",
          },
        },
      ],
    },
  };

  return (
    <><div className="chart-container">
      <div> Evolution of global temperature over the past two million years</div>
      <div>
        <button onClick={() => setShowHumanActions(!showHumanActions)}>
          {showHumanActions ? "Hide" : "Show"} Human
</button>
</div>
      <Line data={getCombinedDataForChart()} options={chartOptions} />
    </div><div>
      </div></>

);
};

export default MyVisual3Chart;