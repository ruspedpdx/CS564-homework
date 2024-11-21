import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";

const CountryPopulationChart = ({ title }) => {
  const url = "https://cs464p564-frontend-api.vercel.app/api/countries";
  const pieChartRef = useRef(null);

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

  // Filter out countries with no gdp listed
  const filteredCountries = countries
    .map((gdp, index) => (gdp > 0 ? { name: countries[index], gdp } : null))
    .filter((item) => item !== null);

  useEffect(() => {
    if (isLoaded) {
      const countryNames = filteredCountries.map((item) => item.name);
      const gdps = filteredCountries.map((item) => item.gdp_billions);

      const pieChart = new Chart(pieChartRef.current, {
        type: "pie",
        data: {
          labels: countryNames,
          datasets: [
            {
              label: "GDP in Billions",
              data: gdps,
              backgroundColor: [
                "rgba(169, 104, 54, 0.6)",
                "rgba(131, 151, 0, 0.6)",
                "rgba(1, 111, 194, 0.6)",
                "rgba(103, 178, 151, 0.6)",
                "rgba(219, 117, 52, 0.6)",
                "rgba(135, 111, 191, 0.6)",
                "rgba(197, 224, 163, 0.6)",
              ],
              borderColor: [
                "rgba(169, 104, 54, 1)",
                "rgba(131, 151, 0, 1)",
                "rgba(1, 111, 194, 1)",
                "rgba(103, 178, 151, 1)",
                "rgba(219, 117, 52, 1)",
                "rgba(135, 111, 191, 1)",
                "rgba(197, 224, 163, 1)",
              ],
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
        },
      });

      return () => {
        pieChart.destroy(); // Clean up on component unmount
      };
    }
  }, [isLoaded, countries]);

  return (
    <main>
      <div className="container">
        <div className="header">
          <h1 className="title">GDP by country of South American Countries</h1>
        </div>
      </div>

      {!isLoaded && <div>Loading...</div>}
      {isLoaded && (
        <div>
          <canvas ref={pieChartRef} />
        </div>
      )}
    </main>
  );
};

export default CountryPopulationChart;
