import React,{useState, useEffect} from "react";
import { Chart } from "chart.js";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";

const Visual1ChartMonthly = () =>{
    const [visual1MoData, setVisual1MoData] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/globalmonthly")
        .then(response=>response.json())
        .then(result=>{
            console.log(result);
            setVisual1MoData(result);
        })
        .catch(error=>console.log(error));
    
},[]);

const [nhmonthlyData, setnhmonthlyData] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/nhmonthly")
        .then(response=>response.json())
        .then(result=>{
            console.log(result);
            setnhmonthlyData(result);
        })
        .catch(error=>console.log(error));
    
},[]);

const [shmonthlyData, setshmonthlyData] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/shmonthly")
        .then(response=>response.json())
        .then(result=>{
            console.log(result);
            setshmonthlyData(result);
        })
        .catch(error=>console.log(error));
    
},[]);

const labels = visual1MoData.map(d => d.yearmo);
const temp = visual1MoData.map(t => t.anomaly);
const nhmotemp = nhmonthlyData.map(t => t.anomaly);
const shmotemp = shmonthlyData.map(t => t.anomaly);



const chartData ={
    labels: labels,
    datasets: [
        {
            label: "Global monthly anomalies",
            data: temp,
            borderColor:[
                "green"
            ]
        },
        {
            label: "Northern monthly anomalies",
            data: nhmotemp,
            borderColor:[
                "pink"
            ]
        },
        {
            label: "Southern monthly anomalies",
            data: shmotemp,
            borderColor:[
                "navy"
            ]
        }
    ]
};

const options ={
    responsive: true,
    lineTension: 0,
    radius: 0,
    scales:{
        x:{
            type: "time",
            time:{
                unit: "month",
            }
        }
    }
}
return(
    <div style={{display: "flex", alingItems: "center", flexWrap:"wrap"}}>
        <div>
            <Line options={options} data={chartData} width={1500} height = {800}/>
        </div>
    </div>
)
};
export default Visual1ChartMonthly;