import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

import Getdata from './components/home.js';
import Evelyn from "./students/Evelyn.js"
import Aranka from "./students/Aranka.js"
import Floris from "./students/floris";
import Hector from "./students/hector";
import Martina from "./students/martina";
import Maurits from "./students/maurits";
import Rahima from "./students/rahima";
import Sandra from "./students/sandra";
import Wietske from "./students/wietske";
import Storm from "./students/storm";

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/evelyn">Evelyn</Link>
          </li>
          <li>
            <Link to="/aranka">Aranka</Link>
          </li>
          <li>
            <Link to="/floris">Floris</Link>
          </li>
          <li>
            <Link to="/hector">Hector</Link>
          </li>
          <li>
            <Link to="/martina">Martina</Link>
          </li>
          <li>
            <Link to="/maurits">Maurits</Link>
          </li>
          <li>
            <Link to="/rahima">Rahima</Link>
          </li>
          <li>
            <Link to="/sandra">Sandra</Link>
          </li>
          <li>
            <Link to="/wietske">Wietske</Link>
          </li>
          <li>
            <Link to="/storm">Storm</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/evelyn" element={<Evelyn/>} />
          <Route path="/aranka" element={<Aranka/>} />
          <Route path="/floris" element={<Floris/>} />
          <Route path="/hector" element={<Hector/>} />
          <Route path="/martina" element={<Martina/>} />
          <Route path="/maurits" element={<Maurits/>} />
          <Route path="/rahima" element={<Rahima/>} />
          <Route path="/sandra" element={<Sandra/>} />
          <Route path="/wietske" element={<Wietske/>} />
          <Route path="/storm" element={<Storm/>} />
          <Route path="/" element={<Getdata/>} />
        </Routes>
      </main>
    </div>
  </Router>
);

export default App;
