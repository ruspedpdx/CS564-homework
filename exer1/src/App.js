import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link
} from 'react-router-dom';
import './styles.css';

import Home from './views/Home';
import Lists from './views/Lists';
import Population from './views/Population';
import Custom from './views/Custom';

function App() {
  return (
    <Router>
        {/* Navbar */}
        <nav className="nav">
          <ul className="navbar">
            <li className="nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link">
              <Link to="/lists">List</Link>
            </li>
            <li className="nav-link">
              <Link to="/population">Population</Link>
            </li>
            <li className="nav-link">
              <Link to="/custom">GDProduct</Link>
            </li>
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route exact path="/" element={<Home title="Home Page"/>} />
          <Route path="/lists" element={<Lists title="Lists"/>} />
          <Route path="/population" element={<Population title="Population"/>} />
          <Route path="/custom" element={<Custom title="GDProduct"/>} />
        </Routes>
    </Router>
  );
}

export default App;