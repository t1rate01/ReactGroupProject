import React, { useState, useEffect, useRef } from 'react';
import { Chart } from 'chart.js';
import { Line } from 'react-chartjs-2';
import Popup from 'reactjs-popup';
import baseURL from "../baseurl";
const Visual4Chart = () => {
  const [chartData, setChartData] = useState(null); // Alustetaan muuttuja chartData, joka sisältää graafin datan.
  const [selectedCountries, setSelectedCountries] = useState(['albania', 'algeria', 'angola']); // Alustetaan muuttuja selectedCountries, joka sisältää valitut maat vertailua varten.
  const [allCountries, setAllCountries] = useState([]); // Alustetaan muuttuja allCountries, joka sisältää kaikki vertailukelpoiset maat.
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  // useEffect-koukku, joka hakee datan palvelimelta ja luo siihen pohjautuvan graafin.
  useEffect(() => {
    const fetchDataAndCreateChart = async () => {
      try {
        const response = await fetch(baseURL +'/v4data'); // Haetaan datatiedot palvelimelta.
        const rawData = await response.text(); // Parsitaan vastauksen tekstisisältö.

        const lastChar = rawData[rawData.length - 1];
        let fixedData;

        if (lastChar === '}' || lastChar === ']') { // Jos viimeinen merkki on } tai ], niin data on jo oikeassa muodossa.
          fixedData = rawData;
        } else { // Muuten lisätään puuttuvat sulut datan ympärille.
          fixedData = rawData.trim() + '}';
        }

        const data = JSON.parse(fixedData); // Parsitaan datatiedot JSON-muotoon.
        const allCountries = Object.keys(data[0]).filter(key => key !== 'year'); // Poimitaan kaikki maat datasta, poislukien vuodet.

        setChartData(data); // Asetetaan datatiedot chartData-muuttujaan.
        setAllCountries(allCountries); // Asetetaan kaikki maat allCountries-muuttujaan.
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataAndCreateChart();
  }, []);
 
  // useEffect-koukku, joka luo ja päivittää graafin
  useEffect(() => {
    if (chartData && chartRef.current) { // Jos datatiedot ja graafi on olemassa, luodaan uusi graafi.
      if (chartInstanceRef.current) { // Jos graafi on jo olemassa, tuhotaan se.
        chartInstanceRef.current.destroy(); // Tuhotaan graafi.
      }

      const ctx = chartRef.current.getContext('2d'); // Haetaan graafin konteksti.
      
      const datasets = selectedCountries.map((country, index) => ({ // Luodaan uusi graafi valituista maista.
        label: country, // Asetetaan maan nimi graafin otsikoksi.
        data: chartData.map(item => item[country]), // Haetaan maan tiedot datasta.
        borderColor: `hsl(${360 / selectedCountries.length * index}, 100%, 50%)`, // Asetetaan maalle oma väri.
        fill: false, // Asetetaan graafi ilman täyttöä.
      }));

      const chart = new Chart(ctx, { // Luodaan uusi graafi.
        type: 'line', // Asetetaan graafin tyyppi.
        data: { // Asetetaan graafin data.
          labels: chartData.map(item => item.year), // Haetaan vuodet datasta.
          datasets, 
        },
        options: {  // Asetetaan graafin asetukset.
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      chartInstanceRef.current = chart; // Asetetaan graafi chartInstanceRef-muuttujaan.
    }
  }, [chartData, selectedCountries]); // Graafi luodaan uudelleen, kun datatiedot tai valitut maat muuttuvat.

  const handleCountryChange = (event) => { // Funktio, joka lisää tai poistaa valitun maan vertailuun.
    const { value } = event.target; // Haetaan valitun maan nimi.
    setSelectedCountries(prevState => { // Asetetaan valittu maa valittujen maiden listaan.
      if (prevState.includes(value)) { // Jos valittu maa on jo listassa, poistetaan se.
        return prevState.filter(country => country !== value); // Poistetaan valittu maa listasta.
      }
      return [...prevState, value]; // Lisätään valittu maa listaan.
    });
  };

  const handleClearCountries = () => { // Funktio, joka poistaa kaikki valitut maat vertailusta.
    setSelectedCountries([]); // Tyhjennetään valittujen maiden lista.
  };
  
  const popuptext=(<div id="popup">
    <h1>Visual 4 Information</h1> 
    <p>This paper aims to provide insights into the global carbon budget, which refers to the changes in carbon dioxide in the environment since the beginning of the Industrial Era. The focus is on CO2 emissions resulting from human activities such as burning fossil fuels and land-use changes, as well as the resulting changes in carbon storage in the land and ocean. Additionally, the paper provides annual estimates of CO2 uptake by the ocean and land. However, global emissions and their partitioning among the atmosphere, ocean, and land may not necessarily add up to zero due to errors and smaller terms that are not fully accounted for in the budget estimate. To address this, the paper also considers budget imbalance, which is a measure of the mismatch between estimated emissions and changes in the atmosphere, land, and ocean. Understanding the global carbon budget and its components is essential for quantifying emissions that are compatible with climate stabilization goals.</p>
    <p><a href="https://data.icos-cp.eu/licence_accept?ids=%5B%22lApekzcmd4DRC34oGXQqOxbJ%22%5D">Dataset link</a></p>
    <p><a href="https://essd.copernicus.org/articles/14/1917/2022/">Source link</a></p>
  </div>);

  return ( // Renderöidään sivun sisältö.
    <div>
      <div className="chart"> 
        {chartData && ( // Jos datatiedot on olemassa, renderöidään graafi.
          <Line 
            data={{
              labels: chartData.map(item => item.year),
              datasets: selectedCountries.map((country, index) => ({ // Luodaan uusi graafi valituista maista.
                label: country,
                data: chartData.map(item => item[country]), // Haetaan maan tiedot datasta.
                borderColor: `hsl(${360 / selectedCountries.length * index}, 100%, 50%)`, // Asetetaan maalle oma väri.
                fill: false, 
              })),
            }}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        )}
        <select onChange={handleCountryChange}> 
          <option>Select a country</option> 
          {allCountries.map((country, index) => ( // Renderöidään kaikki maat alasvetovalikkoon.
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
        <button onClick={handleClearCountries}>Clear Countries</button> 
      <div style={{ marginTop: '20px' }}>
        <div id="infotext">
          <p>
            Here is a line chart showing selected countries co2 data. You can select multiple countries to compare their data.
          </p>
        </div>
      </div>
      <Popup trigger={<button id="exit">Info</button>} position="right center"> 
        <div>{popuptext}</div>
      </Popup>
    </div></div>
  );
}; 

export default Visual4Chart; // Viedään (export) Visual4Chart komponentti index.js käytettäväksi.
