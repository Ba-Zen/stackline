import React from 'react';
import './App.css';
import Item from './components/item/item.component';
import Header from './components/header/header.component';
import Stats from './components/stats/stats.component';
import Chart from './components/assets/chart.png';
import './App.css';

function App() {
  return (
    <div>
      <Header />

      <div className='wrapper'>
        <Item />
        <div className='stats-body'>
          <img className='chart' src={Chart} alt='chart' />
          <Stats />
        </div>
      </div>
    </div>
  );
}

export default App;
