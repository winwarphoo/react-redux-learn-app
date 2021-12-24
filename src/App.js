import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import store from './store/index';
import Count from './components/Count';

function App({ count }) {
  return (
    <div>
      <h1>Redux Learn</h1>
      <p>Count: {store.getState().count}</p>
      <p>Count: {count}</p>
      <Count />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { count: state.count };
};

export default connect(mapStateToProps)(App);
