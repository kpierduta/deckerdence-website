import React from 'react';

const EmptyState = ({ title, message }) => (
  <div className="section">
    <div className="container">
      <div className="notification">
        {title}
        <strong>{message}</strong>
      </div>
    </div>
  </div>
);

export default EmptyState;
