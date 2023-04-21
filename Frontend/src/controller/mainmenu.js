import React from 'react';
import {useState, useEffect} from 'react';
import SectorChart from '../Visual5/sectorChart.js';
import Visual2 from '../Visual2/visual2Chart.js';
import Visual1 from '../Visual1/visual1.js';
import Visual3 from '../Visual3/visual3Chart.js';


// DEMOCHARTIT
//import Visual2 from '../Visual2/visual2demoChart.js';
import DemoData from '../Visual5/demoPiechart.js';


const MainMenu = () => {
    const [menuSwitch, setMenuSwitch] = useState(null);

    const menuSwitchHandler = (luku) => {
        setMenuSwitch(luku);
    };

    switch (menuSwitch) {
        case 0:
            return (
                setMenuSwitch(null)
            )
        case 1:     // exittomenu antaa kutsuttavan funktion sectorchartille, lisätään chartin esittelyyn ks ****** sectorChartissa
            return (
                setMenuSwitch(null)
            )
        case 2:   
            return (
                <div>
                    <Visual2 exitToMenu= {() => setMenuSwitch(null)}/>
                </div>
            )
            case 3:   
            return (
                <div>
                    <Visual3 exitToMenu= {() => setMenuSwitch(null)}/>
                </div>
            )
        case 4:
            return (
                <div>
                    <Visual1 exitToMenu= {() => setMenuSwitch(null)}/>
                </div>
            )
        case 5: 
            return (
                <div>
                <SectorChart exitToMenu={() => setMenuSwitch(null)}/>
                </div>
            )
            
            default:
                return (
                    <div>
                        <h1>Main Menu</h1>
                        <button onClick={() => menuSwitchHandler(5)}>Visual 5</button>
                        <button onClick={() => menuSwitchHandler(3)}>Visual 3 chart</button>
                        <button onClick={() => menuSwitchHandler(2)}>Visual2 Chart</button>
                        <button onClick={() => menuSwitchHandler(4)}>Visual1 Chart</button>
                    </div>
                )
    }

};




export default MainMenu;