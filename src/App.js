import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {TipCalcState as TipCalculator1, TipCalcFunc as TipCalculator2} from './Components/TipCalculator'


function App() {
  return (
    <div className="App">
      <TipCalculator1 />
      <TipCalculator2 />
    </div>
  );
}

export default App;
