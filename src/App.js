import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import Count from './components/Count';
import Post from './components/Post';

function App() {
  const count = useSelector((state) => state.countReducer.count);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({type: "INCREASE_COUNT"});
  }
  const decrease = () => {
    dispatch({type: "DECREASE_COUNT"});
  }
  return (
    <div>
      <h1>Redux Learn</h1>
      <p>Count: {count}</p>
      <Count />
      <button onClick={increase}>Up</button>
      <button onClick={decrease}>Down</button>
      <Post />
    </div>
  );
}

export default App;
