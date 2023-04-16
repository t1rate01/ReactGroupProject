import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const Visual4Chart = () => {
  const [visual4Data, setVisual4Data] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/visual4data")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setVisual4Data(result);
      })
      .catch((error) => console.log(error));
  }, []);

  const years = visual4Data.map((d) => d.year);
  const countries = ["USA", "Canada", "Mexico"]; // Example countries

  const datasets = countries.map((country) => {
    return {
      label: country,
      data: visual4Data.map((d) => d.data[country]),
      fill: false,
      borderColor: getRandomColor(),
      tension: 0.1,
    };
  });

  const chartData = {
    labels: years,
    datasets: datasets,
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        title: {
          display: true,
          text: "Anomaly",
        },
        suggestedMin: -1,
        suggestedMax: 1,
      },
    },
  };

  // Generates a random hex color code
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
      <div>
        <Line options={options} data={chartData} width={1200} height={500} />
      </div>
    </div>
  );
};

export default Visual4Chart;
