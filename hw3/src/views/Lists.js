import React, { useState, useEffect } from "react";

const Lists = ({ title }) => {
  const url = "https://cs464p564-frontend-api.vercel.app/api/countries";

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
      <div className="d-flex container" style={{ justifyContent: "center" }}>
        <div className="header">
          <h1 className="title">
            Interesting facts about South American Countries
          </h1>
        </div>
      </div>

      {!isLoaded && <div>Loading... </div>}
      {isLoaded && (
        <div className="d-flex container" style={{ justifyContent: "center" }}>
          <ul>
            {countries.map((item, index) => (
              <React.Fragment key={index}>
                <li
                  className="card shadow-sm"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <div className="card-body">
                    <strong>{item.name}</strong>
                    <hr />
                    <strong>Population: </strong>{" "}
                    {item.population ?? "No information"}
                    <br />
                    <strong>Official Languages: </strong>
                    {item.official_languages.join(", ")}
                    <br />
                    <strong>GDP: </strong>{" "}
                    {item.gdp_billions
                      ? `$${item.gdp_billions} billion`
                      : "No information"}
                    <br />
                    <hr />
                    <div
                      className="d-flex"
                      style={{ justifyContent: "center" }}
                    >
                      <img
                        src={item.flag_png}
                        alt={item.flag_alt}
                        style={{
                          maxWidth: "100%",
                          objectFit: "contain",
                          height: "auto",
                          marginTop: "5px",
                        }}
                      />
                    </div>
                  </div>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
};

export default Lists;
