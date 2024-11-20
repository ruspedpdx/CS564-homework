import React, { useEffect } from "react";

const Home = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">
          Welcome to the Countries of South America API Demo
        </h1>
      </div>
    </div>
  );
};

export default Home;
