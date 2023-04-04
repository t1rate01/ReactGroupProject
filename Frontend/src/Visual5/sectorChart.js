import React, { useState, useEffect, useRef } from "react";
import { Pie, getElementsAtEvent, getElementAtEvent } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";




const SectorChart = () => {
  const [sectorData, setSectorData] = useState([]); 
  const [subSectorData, setSubSectorData] = useState([]); 
  const [selectedSector, setSelectedSector] = useState(null); 
  const [breakdownData, setBreakdownData] = useState([]);
  const chartRef = useRef();

  ChartJS.register(ArcElement, Tooltip, Legend);
  
  useEffect(() => {
    fetch("http://localhost:8080/sectors")
      .then(response => response.json())
      .then(result => {
        setSectorData(result);
      })
      .catch(error => console.log(error));
  }, []);
  
  useEffect(() => {
    fetch("http://localhost:8080/subsectors")
      .then(response => response.json())
      .then(result => {
        setSubSectorData(result);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http:localhost:8080/breakdowns")
      .then(response => response.json())
      .then(result => {
        setBreakdownData(result);
      })
      .catch(error => console.log(error));
  }, []);

  let previousSector = null;
  const handleSectorClick = (event) => {
    if(getElementsAtEvent(chartRef.current, event).length > 0) {   // rajaa hutiklikkaukset 
    const activeSectorIndexNum = getElementsAtEvent(chartRef.current, event)[0].datasetIndex; // poista myöh
    const activeSectorIndex = getElementsAtEvent(chartRef.current, event)[0].index;   // älä poista, tällä löytyy labeli
    const activeSector = sectorData[activeSectorIndex].sector;  // labelin haku indeksillä
    previousSector = activeSector;
    console.log("activeSectorIndexNum: " + activeSectorIndexNum + " activeSectorIndex: " + activeSectorIndex);  // poista myöh
    if (activeSector) {
      setSelectedSector(activeSector);
   }
  };
  }

  let chartData = {
    labels: sectorData.map((item) => item.sector),
    datasets: [
      {
        label: "Sector share",
        type: "doughnut",
        data: sectorData.map((item) => item.share),
        backgroundColor: [
          "#99346C",
          "#E6DA85",
          "#E66EB0",
          "#57D8E6"
        ]
      }
    ]
  };
  
  if (selectedSector) {
    if(previousSector !== "broken") {
    const filteredSubSectorData = subSectorData.filter((item) => item.sector_name === selectedSector);
    chartData = {
      labels: filteredSubSectorData.map((item) => item.subsector),
      datasets: [
        {
          label: "Sub-sector share",
          type: "doughnut",
          data: filteredSubSectorData.map((item) => item.share),
          backgroundColor: [
            "#99346C",
            "#E6DA85",
            "#E66EB0",
            "#57D8E6"
          ]
        }
      ]
    };
  }
  else if(previousSector === "broken"){
    const filteredBreakdownData = breakdownData.filter((item) => item.sector_name === previousSector);
    chartData = {
      labels: filteredBreakdownData.map((item) => item.sub_sector),
      datasets: [
        {
          label: "Breakdown share",
          type: "doughnut",
          data: filteredBreakdownData.map((item) => item.sector_share),
          backgroundColor: [
            "#99346C",
            "#E6DA85",
            "#E66EB0",
            "#57D8E6"
          ]
        }
      ]
    };
  }
   else {
    chartData = {
      labels: sectorData.map((item) => item.sector),
      datasets: [
        {
          label: "Sector share",
          type: "doughnut",
          data: sectorData.map((item) => item.share),
          backgroundColor: [
            "#99346C",
            "#E6DA85",
            "#E66EB0",
            "#57D8E6"
          ]
        }
      ]
    };
  }
  }
  

  return (
    <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
      <div>
        <Pie data={chartData} width={500} height={500} onClick={handleSectorClick} ref = {chartRef} ></Pie>
      </div>
      <div><button onClick={() => setSelectedSector(null)}>Alkuun</button><button onClick={() => setSelectedSector("broken")}>Lisätietoa</button>
      </div>
    </div>
  );
};


export default SectorChart;
