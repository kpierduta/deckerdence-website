import React from 'react';

const BarTile = ({ title, subtitle }) => (
  <div className="column is-6">
    <div className="box">
      <p className="title has-text-weight-normal">{title}</p>
      <p className="subtitle is-4">{subtitle}</p>
    </div>
  </div>
);

export default BarTile;
