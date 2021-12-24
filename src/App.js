import React from 'react';
import './App.css';
import { useSelector } from 'react-redux'
import Count from './components/Count';

function App() {
  const count = useSelector((state) => state.countReducer.count);
  return (
    <div>
      <h1>Redux Learn</h1>
      <p>Count: {count}</p>
      <Count />
    </div>
  );
}

export default App;
