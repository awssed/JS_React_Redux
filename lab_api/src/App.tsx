import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Main} from "./Main";
import {Link, Route, Routes} from "react-router-dom";
import Movies from "./Movies";

function App() {
  return (
      <>
          <header>
            <nav className="menu">
              <ul>
                <li className="menu-item"><Link to="/movies">Movies</Link></li>
                <li className="menu-item"><Link to="/series">Series</Link></li>
                <li className="menu-item"><Link to="/cartoons">Cartoon</Link></li>
              </ul>
            </nav>
          </header>
        <Routes>
          <Route path="/movies" element={<Movies type={"movie"} title={"matrix"}/>}/>
          <Route path="/series" element={<Movies type={"series"} title={"friends"}/>}/>
          <Route path="/cartoon" element={<Movies type={"cartoon"} title={"shrek"}/>}/>
        </Routes>
      </>
  );
}

export default App;
