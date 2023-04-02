import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";

const SectorChart = () => {
  const [sectorData, setSectorData] = useState([]);



  useEffect(() => {
    fetch("http://localhost:8080/sectors")
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setSectorData(result);
   
      })
      .catch(error => console.log(error));
  }, []);
  

  /*if (!sectorData) {
    return <div>Loading...</div>;
  }*/

  const labels = sectorData.map((item) => item.sector);
  const shares = sectorData.map((item) => item.share);



  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Sector share",
        data: shares,
        backgroundColor: [
          "#99346C",
          "#E6DA85",
          "#E66EB0",
          "#57D8E6"
        ]
      }
    ]
  };

  return (
    <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
      <div>
        <Pie data={chartData} width={500} height={500} />
      </div>
    </div>
  );
};

export default SectorChart;
