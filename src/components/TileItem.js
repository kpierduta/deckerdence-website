import React from 'react';

const TileItem = ({ title, subtitle }) => (
  <div className="column is-6 is-flex">
    <div className="box">
      <p className="title has-text-weight-normal">{title}</p>
      <p className="subtitle is-4">{subtitle}</p>
    </div>
  </div>
);

export default TileItem;
