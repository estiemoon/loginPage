import React from 'react';
import './App.css';
import LoginBox from './componenets/login';
import Headers from './componenets/header';
import {Routes,Route} from "react-router-dom"


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Headers />} />
        <Route path="/login" element={<LoginBox />} />
      </Routes>

      
    </div>
  );
}

export default App;
