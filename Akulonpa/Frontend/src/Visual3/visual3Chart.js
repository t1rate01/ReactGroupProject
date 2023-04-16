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

  const getCarbonDataForChart = () => {
    const filteredData = carbonData.filter(item => item !== null); // filter out null values
    const data = {
      labels: filteredData.map(item => item?.time),
      datasets: [
        {
          label: "CO2 ppm",
          yAxisID: "left",
          data: filteredData.map(item => item?.carbondioxide),
          borderColor: "#FF4136",
          backgroundColor: "rgba(255, 65, 54, 0.2)",
          fill: true,

        },
      ],
    };
    if (showHumanActions) {
      data.datasets.push({
        label: "CO2 ppm with human actions",
        yAxisID: "left",
        data: carbonData.map(item => item.carbondioxide_un),
        borderColor: "#F012BE",
        backgroundColor: "rgba(240, 18, 190, 0.2)",
        fill: true,
      });
    }
    return data;
  };

  const getGastDataForChart = () => {
    return {
      labels: gastData.map(item => item.time),
      datasets: [
        {
          label: "Surface temperature change",
          yAxisID: "right",
          data: gastData.map(item => item.fifty),
          borderColor: "#0074D9",
          backgroundColor: "rgba(0, 116, 217, 0.2)",
          fill: false,
        },
      ],
    };
  };

  const getHumanDataForChart = () => {
    return {
      labels: humanData.map(item => item.time),
      datasets: [
        {
          label: "Human actions",
          data: humanData.map(item => item.action),
          borderColor: "#3D9970",
          backgroundColor: "rgba(61, 153, 112, 0.2)",
          fill: false,
        },
      ],
    };
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
    <div>
      <div> Evolution of global temperature over the past two million years</div>
      <div>
        <button onClick={() => setShowHumanActions(!showHumanActions)}>
          {showHumanActions ? "Hide" : "Show"} human actions
        </button>
      </div>
      <div>
        <Line data={getCarbonDataForChart()} options={chartOptions} />
      </div>
      <div>
        <Line data={getGastDataForChart()} options={chartOptions} />
      </div>
      {showHumanActions && (
        <div>
          <Line data={getHumanDataForChart()} options={chartOptions} />
        </div>
      )}
    </div>
  );
}
        
        export default MyVisual3Chart;