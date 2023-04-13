import React , {useState, useEffect, useRef} from 'react';  // tarviiko useRef?
import {Line,getElementAtEvent,getElementsAtEvent} from 'react-chartjs-2';
import {Chart as ChartJS,
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend,} from 'chart.js';

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,  // hoverinfo
Legend
);


const Visual2 = ({exitToMenu}) => {
    const [annualChartData, setAnnualChartData] = useState([]);
    const [monthlyChartData, setMonthlyChartData] = useState([]);
    const colourList = [ "#FFC300", "#FF5733", "#C70039", "#900C3F", "#581845", "#A93226", "#DC7633", "#F39C12", "#F7DC6F", "#F0B27A", "#BA4A00", "#7B241C", "#D2B4DE", "#9B59B6", "#76448A", "#6C3483", "#1F618D", "#148F77", "#2ECC71", "#239B56"];



const handleExitClick = (event) => {
    console.log("handleExitClick");
    exitToMenu();
}


 useEffect(() => {
    fetch("http://localhost:8080/v2annuals")
        .then(response => response.json())
        .then(result => {
            setAnnualChartData(result);
        }   
        )
        .catch(error => console.log(error));
}, []);

    useEffect(() => {
        fetch("http://localhost:8080/v2monthlys")
            .then(response => response.json())
            .then(result => {
                setMonthlyChartData(result);
            }   
            )
            .catch(error => console.log(error));
    }
    , []);

    const monthlyDates = monthlyChartData.map((item) => item.decimalyear);
    const monthlyData = monthlyChartData.map((item) => item.average);
    const monthlyMin = monthlyChartData.map((item) => item.min);
    const monthlyMax = monthlyChartData.map((item) => item.max);

    const Options = {
        
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            scales: {
                x: {
                    display: true,
                    min: monthlyDates[0],
                    max: monthlyDates[monthlyDates.length - 1],
                },
                y: {
                    display: true,
                    min: monthlyMin,
                    max: monthlyMax,
            },
            },
            title: {
                display: true,
                text: '******change later********',
            },
            grid: {
                drawOnChartArea: false,
            },
        },
    };

    let lineChartData = {
        
        
        labels: annualChartData.map((item) => item.year),
        datasets: [
            {
                label: 'Monthly Chart*******************',
                showLine: true,
                data: monthlyData,
                borderColor: 'red',
                pointRadius: 1,
                
                
            },
            {
                label: 'Annual Chart**************',
                showLine: true,
                data: annualChartData.map((item) => item.mean),
                borderColor: 'blue',
                pointRadius: 1,
            },
       
        ],
    };

    

   return (
        <div>
            <Line data={lineChartData} options={Options} />
            <button onClick={handleExitClick}>Exit</button>
        </div>
    );

     
    }

 export default Visual2;

