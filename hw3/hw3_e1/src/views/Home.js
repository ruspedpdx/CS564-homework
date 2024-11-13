import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Welcome to the Countries of South America API Demo</h1>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100px',
    backgroundColor: '#f5f5f5',
    padding: '20px',
  },
  header: {
    textAlign: 'center',
    maxWidth: '600px',
    padding: '40px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  title: {
    fontSize: '2rem',
    color: '#333333',
    fontWeight: '600',
    margin: 0,
  },
};

export default Home;
