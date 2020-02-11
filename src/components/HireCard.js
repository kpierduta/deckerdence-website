import React from 'react';

const HireCard = ({ title, subtitle, description }) => (
  <div className="card">
    <div className="card-content">
      <h1 className="title is-spaced has-text-centered is-3 is-uppercase">
        {title}
      </h1>
      <p className="subtitle has-text-centered">{subtitle}</p>
      <h1 className="subtitle is-3 has-text-centered is-spaced has-text-weight-bold">
        {description}
      </h1>
    </div>
  </div>
);

export default HireCard;
