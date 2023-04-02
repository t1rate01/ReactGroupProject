import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";

const SubSectorChart = () => {
  const [sectorData, setSectorData] = useState([]);



  useEffect(() => {
    fetch("http://localhost:8080/subsectors")
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

  const labels = sectorData.map((item) => item.subsector);
  const shares = sectorData.map((item) => item.share);



  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Sector share",
        data: shares,
        backgroundColor: [
            "#FF4136",
            "#FF851B", 
            "#FFDC00", 
            "#2ECC40", 
            "#0074D9", 
            "#001F3F", 
            "#B10DC9", 
            "#F012BE", 
            "#85144b", 
            "#3D9970" 
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

export default SubSectorChart;
