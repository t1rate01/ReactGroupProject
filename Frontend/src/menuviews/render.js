import React from 'react';
import Visual1 from '../Visual1/visual1';
import Visual2 from '../Visual2/visual2Chart';
import SectorChart from '../Visual5/sectorChart';
import Visual4Chart from '../Visual4/visual4Chart';
import Visual3 from "../Visual3/visual3Chart";


const Render = ({ settings }) => {
  let renderOptions = settings.split(',');



  return (
    <div>
    {parseInt(renderOptions[0]) === 1 && (<div><Visual1 /></div>)}
    {parseInt(renderOptions[1]) === 1 && (<div><Visual2 /></div>)}
    {parseInt(renderOptions[2]) === 1 && (<div><Visual3/></div>)}
    {parseInt(renderOptions[3]) === 1 && (<div><Visual4Chart/></div>)}
    {parseInt(renderOptions[4]) === 1 && (<div><SectorChart /></div>)}

</div>
  );
};

export default Render;
