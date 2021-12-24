import React from "react";
import { connect } from 'react-redux';

const Count = ({ count }) => {
  return (
    <>
      <div>Countコンポーネント: {count}</div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { count: state.count};
};


export default connect(mapStateToProps)(Count);