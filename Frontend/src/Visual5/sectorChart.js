import React, { useState, useEffect, useRef } from "react";
import { Pie, getElementsAtEvent, getElementAtEvent } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import visual5styles from "./visual5styles.css";


const SectorChart = ({exitToMenu}) => {   // ********** esittelyssä mukana mainmenulta saatu funktio exitToMenu !!!
  const [sectorData, setSectorData] = useState([]);    // sectorin data ja muuttamisfunktio
  const [subSectorData, setSubSectorData] = useState([]);  // subsectorin data ja muuttamisfunktio
  const [selectedSector, setSelectedSector] = useState(null); // valitun sectorin muuttuja ja muuttamisfunktio
  const [breakdownData, setBreakdownData] = useState([]);    // breakdownin data ja muuttamisfunktio
  const [showBreakdown, setShowBreakdown] = useState(false);  // lisätietoa napin muuttuja ja muuttamisfunktio
  const chartRef = useRef();  // referenssi liittyy klikkauksen tunnistamiseen
  const colourList = [ "#FFC300", "#FF5733", "#C70039", "#900C3F", "#581845", "#A93226", "#DC7633", "#F39C12", "#F7DC6F", "#F0B27A", "#BA4A00", "#7B241C", "#D2B4DE", "#9B59B6", "#76448A", "#6C3483", "#1F618D", "#148F77", "#2ECC71", "#239B56"];

  const donutOptions = {  // perusdonitsien asetukset
    layout: {
      padding: {
        left: 50,
        right: 50,
        top: 0,
        bottom: 50,
      },
    },
  };

  // HOX  ! DONITSICHARTIN EKALTA SIVULTA PÄÄSEE ALAKATEGORIOIHIN, MUTTA KOSKA BROKEN 
  // SUB KATEGORIOISSA EI OLLUT JÄRKEVÄÄ TAPAA SAADA KAIKKIA LOKEROITUA ENKÄ NÄHNYT JÄRKEVÄNÄ LAITTAA "OTHER"
  // KATEGORIAA, LAITOIN NYT NIIN ETTÄ PÄÄDONITSISTA VOI KLIKATA ALASEKTOREIHIN, JA SAATAVILLA ON ERIKSEEN
  // NAPPI JOKA ANTAA KAIKEN DATAN BROKENDOWN DATAN PERUSTEELLA
  
  const brokenDonitsiOptions = { // muotoilusyistä donitsille joka antaa kaiken datan eri asetukset
    layout: {
      padding: {
        left: 50,
        right: 50,
        top: 0,
        bottom: 50,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // labelit piiloon, ainoa olennainen ero
      },
    },
  };
  
  

  ChartJS.register(ArcElement, Tooltip, Legend);
  
  useEffect(() => {    // sectoridatan automaattihaku
    fetch("http://localhost:8080/sectors")
      .then(response => response.json())
      .then(result => {
        setSectorData(result);
      })
      .catch(error => console.log(error));
  }, []);
  
  useEffect(() => {   // subsectoridatan automaattihaku
    fetch("http://localhost:8080/subsectors")
      .then(response => response.json())
      .then(result => {
        setSubSectorData(result);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {   // breakdownidatan automaattihaku
    fetch("http://localhost:8080/breakdowns")
      .then(response => response.json())
      .then(result => {
        setBreakdownData(result);
      })
      .catch(error => console.log(error));
  }, []);

  const handleSectorClick = (event) => {    // Tämä reagoi donitsin osioiden klikkauksiin
    if(getElementsAtEvent(chartRef.current, event).length > 0) {   // rajaa hutiklikkaukset
    const activeSectorIndexNum = getElementsAtEvent(chartRef.current, event)[0].datasetIndex; // poista myöhemmin !!!!!!!!!!!!!!!!!!!!!!!!
    const activeSectorIndex = getElementsAtEvent(chartRef.current, event)[0].index;   // älä poista, tällä löytyy labeli arraystä
    const activeSector = sectorData[activeSectorIndex].sector;  // labelin haku indeksillä
    console.log("activeSectorIndexNum: " + activeSectorIndexNum + " activeSectorIndex: " + activeSectorIndex);  // poista myöh
    if (activeSector) {
      setSelectedSector(activeSector);   // muuttaa muuttujaa ja se aiheuttaa if kutsun
   }
  };
  }

  const handleBreakdownClick = (event) => {   // muuttaa chartdatan niin että donitsiin piirtyy kaikki pilkottu data
    setShowBreakdown(true);
    setSelectedSector(null);
  }


  const handleBackClick = (event) => {     // takaisin painike, jos on chartin etusivulla -> kutsuu mainmenun antamaa funktiota
    if(showBreakdown===false && selectedSector===null) {
      console.log("Exit to menu");
      exitToMenu();
    }
    else { 
    setShowBreakdown(false);    // muussa tapauksessa nollaa chartin muuttujat ja palauttaa donitsin alkutilaan
    setSelectedSector(null);
    }
  }

  let chartData = {   // chartin defaulttidata, neljä pääsektoria, ks ensimmäinen fetchi
    labels: sectorData.map((item) => item.sector),
    datasets: [
      {
        label: "Share",
        type: "doughnut",
        data: sectorData.map((item) => item.share),
        backgroundColor: colourList.slice(0, sectorData.length)
      }
    ]
  };

  if (showBreakdown)   // jos lisätietoa nappia painetaan, chartti kutsuu kolmannen fetchin datat näkyviin
  {
    colourList.sort(() => Math.random() - 0.5);  // sekoittaa värit ettei ala aina keltasesta
    chartData = {
      labels: breakdownData.map((item) => item.sub_sector),
      datasets: [
        {
          label: "Share",
          type: "doughnut",
          data: breakdownData.map((item) => item.sector_Share),
          backgroundColor: colourList.slice(0, breakdownData.length)
        }
      ]
    }
  }
  
  if (selectedSector) {   // donitsin osioiden klikkauksen tunnistavan funktion muutettua muuttujaa, ja vaihtaa datan perustuen klikkauksesta saatuun indexinumeroon 
    console.log("selectedSector: " + selectedSector)
    colourList.sort(() => Math.random() - 0.5);  // sekoittaa värit ettei aina samat subsektoreissa
    const filteredSubSectorData = subSectorData.filter((item) => item.sector_name === selectedSector);  // filtteröi tietokantadataan listyn sector_name viitaten, käyttää vertailuun klikkauksen indexin perusteella haettua labelia
    chartData = {
      labels: filteredSubSectorData.map((item) => item.subsector),
      datasets: [
        {
          label: "Share",
          type: "doughnut",
          data: filteredSubSectorData.map((item) => item.share),
          backgroundColor: colourList.slice(0, filteredSubSectorData.length) 
        }
      ]
  }
  }
  
  // eka returni on perusdonitsi, toinen on klikkauksen perusteella rajattu donitsi, kolmas on kaiken datan antava donitsi, joka tulee lisätietoa napista esiin
  // tokassa tarkistetaan onko selectedSectori eri kuin null ja breakdownia ei ole painettu
  // kolmannessa tarkistetaan onko breakdownia painettu
  // napit piirretään aina ulkopuolisena
  // .css tiedostossa on rajattu mitkä antaa pointer-eventtejä

  return (    
    <div className="maindonitsi">
       <h1 id="donitsiotsikko">{selectedSector === null && !showBreakdown ? 'Sectors' : showBreakdown ? 'Breakdown' : selectedSector}</h1> 
      {selectedSector === null && showBreakdown === false && (
        <div className="donitsi">
          <Pie data={chartData} onClick={handleSectorClick} ref={chartRef} options={donutOptions} width={500} height={500} />
        </div>
      )}
      {selectedSector !== null && !showBreakdown && (
        <div className="donitsi">
          <Pie data={chartData} ref={chartRef} options={donutOptions} width={500} height={500} />
        </div>
      )}
      {showBreakdown && (
        <div className="donitsi">
          <h3 id="alaotsikko">Move your mouse on a sector to see details</h3>
          <Pie data={chartData} ref={chartRef} options={brokenDonitsiOptions} width={500} height={500} />
        </div>
      )}
            <div className="donitsinapit">
            <button onClick={handleBackClick}>Back</button>
            <button onClick={handleBreakdownClick}>All Data</button>
          </div>
    </div>
  );
  
  }

export default SectorChart;
