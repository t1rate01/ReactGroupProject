import React,{useState, useEffect} from "react";
import { Chart } from "chart.js";
import { Line } from "react-chartjs-2";

const Visual1Chart = () =>{
    const [visual1Data, setVisual1Data] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/visual1")
        .then(response=>response.json())
        .then(result=>{
            console.log(result);
            setVisual1Data(result);
        })
        .catch(error=>console.log(error));
    
},[]);

const [nhannual1Data, setnhannualData] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/nhannual")
        .then(response=>response.json())
        .then(result=>{
            console.log(result);
            setnhannualData(result);
        })
        .catch(error=>console.log(error));
    
},[]);

const [shannual1Data, setshannualData] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/shannual")
        .then(response=>response.json())
        .then(result=>{
            console.log(result);
            setshannualData(result);
        })
        .catch(error=>console.log(error));
    
},[]);

const labels = visual1Data.map(d => d.year);
const temp = visual1Data.map(t => t.anomaly);
const nhtemp = nhannual1Data.map(t=>t.anomaly);
const shtemp = shannual1Data.map(t=>t.anomaly);

const chartData ={
    labels: labels,
    datasets: [
        {
            label: "Global annual anomalies",
            data: temp,
            backgroundColor:[
                "blue"
            ]
        },
        {
            label:"Northern annual anomalies",
            data: nhtemp,
            backgroundColor: [
                "yellow"
            ]
        },
        {
            label:"Southern annual anomalies",
            data: shtemp,
            backgroundColor: [
                "red"
            ]
        }
    ]
};

const options ={
    responsive: true
}
return(
    <div style={{display: "flex", alingItems: "center", flexWrap:"wrap"}}>
        <div>
            <Line options={options} data={chartData} width={1200} height = {500}/>
        </div>
    </div>
)
};
export default Visual1Chart;