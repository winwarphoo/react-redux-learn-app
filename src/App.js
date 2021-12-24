import React from 'react';
import './App.css';
import store from './store/index';
import { connect } from 'react-redux'

function App({ count }) {
  return (
    <div>
      <h1>Redux Learn</h1>
      <p>Count: {store.getState().count}</p>
      <p>Count: {count}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { count: state.count };
};

export default connect(mapStateToProps)(App);
