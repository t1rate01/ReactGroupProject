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
    const [iceAge1Data, setIceAge1Data] = useState([]);
    const [iceAge2Data, setIceAge2Data] = useState([]);
    const [iceAge3Data, setIceAge3Data] = useState([]);
    const colourList = [ "#FFC300", "#FF5733", "#C70039", "#900C3F", "#581845", "#A93226", "#DC7633", "#F39C12", "#F7DC6F", "#F0B27A", "#BA4A00", "#7B241C", "#D2B4DE", "#9B59B6", "#76448A", "#6C3483", "#1F618D", "#148F77", "#2ECC71", "#239B56"];



const handleExitClick = (event) => {
    console.log("handleExitClick");
    exitToMenu();
}

 useEffect(() => {
    fetch("http://localhost:8080/v2annuals")
        .then(response => response.json())
        .then(result => {
            let chartData = result.map((item) => ({ x: item.year, y: item.mean }));
            setAnnualChartData(chartData);
        }   
        )
        .catch(error => console.log(error));
}, []);

    useEffect(() => {
        fetch("http://localhost:8080/v2monthlys")
            .then(response => response.json())
            .then(result => {
                let chartData = result.map((item) => ({ x: item.decimalyear, y: item.average }));
                setMonthlyChartData(chartData);
            }   
            )
            .catch(error => console.log(error));
    }
    , []);

    useEffect(() => {
        fetch("http://localhost:8080/v2ice_age_1")
            .then(response => response.json())
            .then(result => {
                result.sort((a, b) => a.year - b.year);
                let chartData = result.map((item) => ({ x: item.year, y: item.co2 }));
                setIceAge1Data(chartData);
            }
            )
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        fetch("http://localhost:8080/v2ice_age_2")
            .then(response => response.json())
            .then(result => {
                result.sort((a, b) => a.year - b.year);
                let chartData = result.map((item) => ({ x: item.year, y: item.co2 }));
                setIceAge2Data(chartData);
            }
            )
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        fetch("http://localhost:8080/v2ice_age_3")
            .then(response => response.json())
            .then(result => {
                result.sort((a, b) => a.year - b.year);
                let chartData = result.map((item) => ({ x: item.year, y: item.co2 }));
                setIceAge3Data(chartData);
            }
            )
            .catch(error => console.log(error));
    }, []);
      
    
    const xMin = Math.min(
        ...[
          ...iceAge1Data.map(item => item.x),
          ...iceAge2Data.map(item => item.x),
          ...iceAge3Data.map(item => item.x),
          ...monthlyChartData.map(item => item.x),
          ...annualChartData.map(item => item.x),
        ]
      );
      
      const xMax = Math.max(
        ...[
          ...iceAge1Data.map(item => item.x),
          ...iceAge2Data.map(item => item.x),
          ...iceAge3Data.map(item => item.x),
          ...monthlyChartData.map(item => item.x),
          ...annualChartData.map(item => item.x),
        ]
      );
    const Options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            scales: {
                x: {
                min: xMin,
                max: xMax,
                },
                y: {
                  display: true,
                  min: Math.min(...[
                    ...iceAge1Data.map(item => item.y),
                    ...iceAge2Data.map(item => item.y),
                    ...iceAge3Data.map(item => item.y),
                    ...monthlyChartData.map(item => item.y),
                    ...annualChartData.map(item => item.y),
                  ].filter(y => y)),
                  max: Math.max(...[
                    ...iceAge1Data.map(item => item.y),
                    ...iceAge2Data.map(item => item.y),
                    ...iceAge3Data.map(item => item.y),
                    ...monthlyChartData.map(item => item.y),
                    ...annualChartData.map(item => item.y),
                  ].filter(y => y)),
                },
              },
              
            title: {
                display: true,
                text: '******change later********',
            },
            grid: {
                drawOnChartArea: true,
            },
        },
    };

    const firstYear = Math.min(
        ...[
          ...iceAge1Data.map((item) => item.x),
          ...iceAge2Data.map((item) => item.x),
          ...iceAge3Data.map((item) => item.x),
          ...monthlyChartData.map((item) => item.x),
          ...annualChartData.map((item) => item.x),
        ]
      );
      
      const lastYear = Math.max(
        ...[
          ...iceAge1Data.map((item) => item.x),
          ...iceAge2Data.map((item) => item.x),
          ...iceAge3Data.map((item) => item.x),
          ...monthlyChartData.map((item) => item.x),
          ...annualChartData.map((item) => item.x),
        ]
      );

    /*  const chartlabels = [];
for (let i = firstYear; i <= lastYear; i++) {
    i = i.toFixed(4);
  chartlabels.push(i);
}
*/
      
            const chartlabels = [];
for (let i = firstYear; i <= lastYear; i++) {
    if (i < 1010){
    parseFloat(i);
  chartlabels.push(i);
    }
    if (i > 1800){
    parseFloat(i);
    chartlabels.push(i);
    }
}     // TÄMÄ CHARTLABELS EI TODNÄK OLE HYVÄ -- TEE KLIKKAUKSEEN REAGOIVA ICE AGE 3 NAPPI JA MUUTA SEN MUKAAN CHARTLABELSIN ALKUARVOJA, JOTTA ZOOMAUTUU KIVASTI
      // MONTHLYCHARTDATA EDELLEEN VITUILLAAN
    let lineChartData = {
        labels: chartlabels,
        datasets: [
            {
                label: 'Monthly Chart*******************',
                showLine: true,
                data: monthlyChartData.map(item => ({x: Number(item.x), y: item.y})),
                borderColor: 'red',
                pointRadius: 1,

            },
            {
                label: 'Annual Chart**************',
                showLine: true,
                data: annualChartData ,
                borderColor: 'blue',
                pointRadius: 1,
            },
            {
                label: 'Ice Age 1',
                showLine: true,
                hidden: true,
                data: iceAge1Data,
                borderColor: 'green',
                pointRadius: 1,
            },
            {
                label: 'Ice Age 2',
                showLine: true,
                hidden: true,
                data: iceAge2Data,
                borderColor: 'yellow',
                pointRadius: 1,
            },
            {
                label: 'Ice Age 3',
                showLine: true,
                hidden: true,
                data: iceAge3Data,
                borderColor: 'orange',
                pointRadius: 1,
            },
       
        ],
    };

    function logs (){
        console.log("iceAge1Data", iceAge1Data);
        console.log("iceAge2Data", iceAge2Data);
        console.log("iceAge3Data", iceAge3Data);
        console.log("monthlyChartData", monthlyChartData);
        console.log("annualChartData", annualChartData);
        console.log("firstYear", firstYear);
        console.log("Map item x ", iceAge1Data.map((item) => item.x));
        console.log("Map item y ", iceAge1Data.map((item) => item.y));
        console.log("x min " , xMin);
        console.log("x max " , xMax);
    }


   return (
        logs(),
        <div>
            <Line data={lineChartData} options={Options} />
            <button onClick={handleExitClick}>Exit</button>
        </div>
    );

     
    }

 export default Visual2;

