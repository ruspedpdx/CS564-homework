import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js/auto';

const CountryPopulationChart = ({ name }) => {
  const url = 'https://cs464p564-frontend-api.vercel.app/api/countries';
  const chartRef = useRef(null);
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

  useEffect(() => {
    if (isLoaded) {
      const countryNames = countries.map((item) => item.name);
      const gdps = countries.map((item) => item.gdp_billions);

      const pieChart = new Chart(pieChartRef.current, {
        type: 'pie',
        data: {
          labels: countryNames,
          datasets: [
            {
              label: 'GDP in Billions',
              data: gdps,
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(199, 199, 199, 0.6)',
				'rgba(64, 172, 225, 0.6)',
                'rgba(245, 196, 96, 0.6)',
                'rgba(85, 182, 182, 0.6)',
                'rgba(163, 112, 245, 0.6)',
                'rgba(245, 149, 54, 0.6)',
                'rgba(189, 189, 189, 0.6)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(199, 199, 199, 1)',
				'rgba(64, 172, 225, 1)',
                'rgba(245, 196, 96, 1)',
                'rgba(85, 182, 182, 1)',
                'rgba(163, 112, 245, 1)',
                'rgba(245, 149, 54, 1)',
                'rgba(189, 189, 189, 1)',
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
      <h1>{name}</h1>

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
