import React from 'react';

const BarTile = ({ title, subtitle }) => (
  <div className="tile is-child box">
    <p className="title has-text-weight-normal">{title}</p>
    <p className="subtitle is-4">{subtitle}</p>
  </div>
);

export default BarTile;
