import React from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
import {useState, useEffect} from 'react';
import SectorChart from '../Visual5/sectorChart.js';
import Visual2 from '../Visual2/visual2Chart.js';


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
                <div>
                    <h1>Main Menu</h1>
                    <button onClick={() => menuSwitchHandler(1)}>Sector Chart</button>
                    <button onClick={() => menuSwitchHandler(2)}>Demo Chart</button>
                </div>
            )
        case 1:     // exittomenu antaa kutsuttavan funktion sectorchartille, lisätään chartin esittelyyn ks ****** sectorChartissa
            return (
                <div>
                    <SectorChart exitToMenu={() => setMenuSwitch(null)}/>
                    </div>
            )
        case 2:   
            return (
                <div>
                    <DemoData exitToMenu= {() => setMenuSwitch(null)}/>
                </div>
            )
            case 3:   
            return (
                <div>
                    <Visual2 exitToMenu= {() => setMenuSwitch(null)}/>
                </div>
            )
        
            default:
                return (
                    <div>
                        <h1>Main Menu</h1>
                        <button onClick={() => menuSwitchHandler(1)}>Sector Chart</button>
                        <button onClick={() => menuSwitchHandler(2)}>Demo Chart</button>
                        <button onClick={() => menuSwitchHandler(3)}>Visual2 Chart</button>
                    </div>
                )
    }

};




export default MainMenu;