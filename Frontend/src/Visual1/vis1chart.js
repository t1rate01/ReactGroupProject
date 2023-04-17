import React,{useState, useEffect} from "react";
import { Chart } from "chart.js";
import { Line } from "react-chartjs-2";

const Visual1Chart = () =>{ //haetaan käyrien tiedot ja muutetaan jsoniksi
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

const [recoData, setRecoData] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/reconstruction")
        .then(response=>response.json())
        .then(result=>{
            console.log(result);
            setRecoData(result);
        })
        .catch(error=>console.log(error));
    
},[]);

const labels = visual1Data.map(d => d.year);
const temp = visual1Data.map(t => t.anomaly);
const nhtemp = nhannual1Data.map(t=>t.anomaly);
const shtemp = shannual1Data.map(t=>t.anomaly);
const recoLabes = recoData.map(t => t.year);
const recoTemp = recoData.map(y => y.value);

let chartData ={
   
    labels: labels, //tässä annan x-akselin tiedot, eli vuodet 1850-2021
    datasets: [
        {
            label: "Global annual anomalies",
            data: temp,
            borderColor:[
                "blue"
            ]
        },
        {
            label:"Northern annual anomalies",
            data: nhtemp,
            borderColor: [
                "yellow"
            ]
        },
        {
            label:"Southern annual anomalies",
            data: shtemp,
            borderColor: [
                "red"
            ]
            
        },
        {
            label:"Reconstruction",
            data: recoTemp,
            labels: recoLabes, //vaikka tämä on tässä niin ei auta kun tuo aiempi labels ylikirjoittaa
            hidden: true, //defaulttina poissa näkyvistä
            borderColor: [
                "black"
            ]
            
        }
    ]
};

const handleClick = (e) =>{ //tässä yritin kötöstellä jotain että x-akselin data muuuttuisi kun reconstruction data näkyvillä
    chartData.labels = recoLabes;
    chartData.update();
}

const options ={
    responsive: true,
    lineTension: 0,
    radius: 0,
    borderWidth: 1,
    options:{
    plugins:{
        legend:{
            onClick: function(e, legendItem) {  //tämä seuraava paska tässä ois sitä varten että muut piilottuis kun yhtä klikkaa
                var index = legendItem.datasetIndex; //mutta se ei pellaa
                var ci = this.chart;
                var alreadyHidden = (ci.getDatasetMeta(index).hidden === null) ? false : ci.getDatasetMeta(index).hidden;
      
                ci.data.datasets.forEach(function(e, i) {
                  var meta = ci.getDatasetMeta(i);
      
                  if (i !== index) {
                    if (!alreadyHidden) {
                      meta.hidden = meta.hidden === null ? !meta.hidden : null;
                    } else if (meta.hidden === null) {
                      meta.hidden = true;
                    }
                  } else if (i === index) {
                    meta.hidden = null;
                  }
                });
      
                ci.update();
              },
            },
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
export default Visual1Chart;