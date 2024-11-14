import React, { useState, useEffect } from 'react';

const Lists = ({ name }) => {
  const url = 'https://cs464p564-frontend-api.vercel.app/api/countries';

  // state variables
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
  }, []);

  return (
<main>
  {/* <Navbar /> */}
  <div className="container">
      <div className="header">
        <h1 className="title">Interesting facts about South American Countries</h1>
      </div>
    </div>

  {!isLoaded && <div>Loading... </div>}
  {isLoaded && (
    <ul>
      {countries.map((item, index) => (
        <li key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
          <div>
            <strong>{item.name}</strong> - Population: {item.population}
            <br />
            Official Languages: {item.official_languages.join(', ')}
            <br />
            GDP: ${item.gdp_billions} billion
            <br />
            <img src={item.flag_png} alt={item.flag_alt} style={{ maxWidth: '100px', marginTop: '5px' }} />
          </div>
        </li>
      ))}
    </ul>
  )}
</main>

  );
};

export default Lists;
