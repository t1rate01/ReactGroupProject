import React, { useState } from "react";
import { Pie } from "react-chartjs-2";

const demoSectors =  [
  { sector: "sector1", share: "200" },
  { sector: "sector2", share: "100" },
  { sector: "sector3", share: "50" },
  { sector: "sector4", share: "25" },
];

const DemoData = ({ exitToMenu }) => {
  const [demoChartData, setDemoChartData] = useState({
    labels: demoSectors.map((d) => d.sector),
    datasets: [
      {
        label: "Sector share",
        data: demoSectors.map((d) => d.share),
        backgroundColor: ["#99346C", "#E6DA85", "#E66EB0", "#57D8E6"],
      },
    ],
  });

  const exitClick = (e) => {
    exitToMenu();
  };

  return (
    <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
      <div>
        <Pie data={demoChartData} width={500} height={500} />
        <button onClick={exitClick}>Exit</button>
      </div>
    </div>
  );
}

export default DemoData;