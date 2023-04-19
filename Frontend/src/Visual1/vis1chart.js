import React,{useState, useEffect} from "react";
import { Chart } from "chart.js";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";

const Visual1Chart = () =>{ //haetaan käyrien tiedot ja muutetaan jsoniksi
    const [visual1Data, setVisual1Data] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/visual1")
        .then(response=>response.json())
        .then(result=>{
            let chartData = result.map((item)=>({x: item.year, y: item.anomaly}));
            setVisual1Data(chartData);

        })
        .catch(error=>console.log(error));
    
},[]);

const [nhannual1Data, setnhannualData] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/nhannual")
        .then(response=>response.json())
        .then(result=>{
            let chartData = result.map((item)=>({x: item.year, y: item.anomaly}))
            setnhannualData(chartData)
        })
        .catch(error=>console.log(error));
    
},[]);

const [shannual1Data, setshannualData] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/shannual")
        .then(response=>response.json())
        .then(result=>{
            let chartData = result.map((item)=>({x: item.year, y: item.anomaly}))
            setshannualData(chartData);
        })
        .catch(error=>console.log(error));
    
},[]);

const [recoData, setRecoData] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/reconstruction")
        .then(response=>response.json())
        .then(result=>{
            let chartData = result.map((item)=>({x: item.year, y: item.value}))
            setRecoData(chartData);
        })
        .catch(error=>console.log(error));
    
},[]);

let chartData ={
   
    //labels: labels, //tässä annan x-akselin tiedot, eli vuodet 1850-2021
    datasets: [
        {
            label: "Global annual anomalies",
            data: visual1Data,
            borderColor:[
                "blue"
            ]
        },
        {
            label:"Northern annual anomalies",
            data: nhannual1Data,
            borderColor: [
                "yellow"
            ]
        },
        {
            label:"Southern annual anomalies",
            data: shannual1Data,
            borderColor: [
                "red"
            ]
            
        },
        {
            label:"Reconstruction",
            data: recoData,
            hidden: true, //defaulttina poissa näkyvistä
            borderColor: [
                "black"
            ],
            
            
            
        }
    ]
};

const handleClick = (e) =>{ //tässä yritin kötöstellä jotain että x-akselin data muuuttuisi kun reconstruction data näkyvillä
   
    chartData.update();
}

const options ={
    responsive: true,
    lineTension: 0,
    radius: 0,
    borderWidth: 1,
    scales:{
        x:{
            type: "time",
            time:{
                unit: "year",
            }
            
        },
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
export default Visual1Chart;