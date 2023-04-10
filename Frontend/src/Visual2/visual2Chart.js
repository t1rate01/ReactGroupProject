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

const Options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
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

    const ylabels = () => {
        let lukuarray = [];
        for (let i = 0; i < monthlyChartData.length; i++) {
            let luku = monthlyChartData[i].decimalyear;
            let lukux = luku.split(".")[0];
            lukuarray.push(lukux);
        }
        return lukuarray;
    }

    const yearLabels = () => {
        let lukuarray = [];
        for (let i = 0; i < annualChartData.length; i++) {
            let luku = annualChartData[i].year;
            lukuarray.push(luku);
        }
        return lukuarray;
    }

    const annualData = annualChartData.map((item) => item.mean);
    const annualMeans = annualChartData.map((item) => item.mean);
    const monthlyData = monthlyChartData.map((item) => item.average);




    let lineChartData = {
        labels:  ylabels(),
        datasets: [
            {
                label: 'Annual Chart',
                data: annualData,
                borderColor: 'blue',
                pointRadius: 1,
            },
            {
                label: 'Monthly Chart',
                data: monthlyData,
                borderColor: 'red',
                pointRadius: 1,
            }
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

