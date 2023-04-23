import React from 'react';
import Visual1Chart from '../Visual1/vis1chart';
import Visual2 from '../Visual2/visual2Chart';
import SectorChart from '../Visual5/sectorChart';



 const Render = ({settings}) => {


    const renderOptions = (settings) => {
        let settingsArray = settings.split("");
        let chartsToDisplay = [];
        if (settingsArray[0] === "1")
            {
                chartsToDisplay.push(<Visual1Chart />);
            }
        if (settingsArray[1] === "1")
            {
                chartsToDisplay.push(<Visual2 />);
            }
        if (settingsArray[2] === "1")
            {
                chartsToDisplay.push(<h1>Visual 3</h1> );
            }
        if (settingsArray[3] === "1")
            {
                chartsToDisplay.push(<h1>Visual 4</h1> );
            }
        if (settingsArray[4] === "1")
            {
                chartsToDisplay.push(<SectorChart />);
            } 
    return chartsToDisplay;

}

    return (
        <div>
            {renderOptions(settings)}
        </div>
    )
 }

export default Render;