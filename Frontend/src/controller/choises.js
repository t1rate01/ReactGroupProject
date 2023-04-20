import React from "react";
import { useState, useEffect } from "react";

const Choises = () => {
    const [visualChoises, setVisualChoises] = useState([]);

    const visualsArray = [
        0, 0, 0, 0 ,0
    ];

    const displayVisuals = () => {
        setVisualChoises(visualsArray);
    }

    const displayFromChoises = () => {
        for(let i = 0; i < visualChoises.length-1; i++) {
            if(visualChoises[i] === 1) {
                if(i === 0) {
                    return (
                        <div>
                            <Visual1 exitToMenu= {() => setMenuSwitch(null)}/>
                        </div>
                    )
                }
                if(i === 1) {
                    return (
                        <div>
                            <Visual2 exitToMenu= {() => setMenuSwitch(null)}/>
                        </div>
                    )
                }
                if(i === 2) {
                    return (
                        <div>
                            <DemoData exitToMenu= {() => setMenuSwitch(null)}/>
                        </div>
                    )
                }
                if(i === 3) {
                    return (
                        <div>
                            <SectorChart exitToMenu={() => setMenuSwitch(null)}/>
                        </div>
                    )
                }
                if(i === 4) {
                    return (
                        <div>
                            <Visual5 exitToMenu= {() => setMenuSwitch(null)}/>
                        </div>
                    )
                }

            }
        }

}
}