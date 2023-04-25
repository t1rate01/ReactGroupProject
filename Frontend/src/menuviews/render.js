import React from 'react';
import Visual1 from '../Visual1/visual1';
import Visual2 from '../Visual2/visual2Chart';
import SectorChart from '../Visual5/sectorChart';
import Visual3 from "../Visual3/visual3Chart";

const Render = ({ settings }) => {
  const renderOptions = () => {
    let settingsArray = settings[0].split(',').map(Number);
    let chartsToDisplay = [];
    if (settingsArray[0] === 1) {
      chartsToDisplay.push(<Visual1 />);
    }
    if (settingsArray[1] === 1) {
      chartsToDisplay.push(<Visual2 />);
    }
    if (settingsArray[2] === 1) {
      chartsToDisplay.push(<Visual3/>);
    }
    if (settingsArray[3] === 1) {
      chartsToDisplay.push(<h1>Visual 4</h1>);
    }
    if (settingsArray[4] === 1) {
      chartsToDisplay.push(<SectorChart />);
    }
    return chartsToDisplay;
  };

  return (
    <div>{renderOptions()}</div>
  );
};

export default Render;