import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";

const CountryPopulationChart = ({ title }) => {
  const url = "https://cs464p564-frontend-api.vercel.app/api/countries";
  const chartRef = useRef(null);

  // State variables
  const [countries, setCountries] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
        setIsLoaded(true);
      })
      .catch((error) => console.log(error));
  }, [url]);

  // Filter out countries with no population listed
  const filteredCountries = countries
    .map((population, index) =>
      population > 0 ? { name: countries[index], population } : null
    )
    .filter((item) => item !== null);

  useEffect(() => {
    if (isLoaded) {
      const countryNames = filteredCountries.map((item) => item.name);
      const populations = filteredCountries.map((item) => item.population);

      const myChart = new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: countryNames,
          datasets: [
            {
              label: "Population",
              data: populations,
              backgroundColor: "rgba(17, 17, 175, 0.44)",
              borderColor: "rgba(17, 17, 175, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Population",
              },
            },
            x: {
              title: {
                display: true,
                text: "Country",
              },
            },
          },
        },
      });

      return () => {
        myChart.destroy(); // Clean up on component unmount
      };
    }
  }, [isLoaded, countries]);

  return (
    <main>
      {/* <Navbar /> */}
      <div className="container">
        <div className="header">
          <h1 className="title">Populations of South American Countries</h1>
        </div>
      </div>

      {!isLoaded && <div>Loading...</div>}
      {isLoaded && (
        <div>
          <canvas ref={chartRef} />
        </div>
      )}
    </main>
  );
};

export default CountryPopulationChart;