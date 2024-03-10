import React from 'react';
import "./App.css";
import CellComponent from './components/CellComponent';
import BoardComponent from './components/BoardComponent';

const App = () => {
  return (
    <div className='app'>
      <BoardComponent />
      <CellComponent />
    </div>
  );
};

export default App;
