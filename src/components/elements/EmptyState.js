import React from 'react';

const EmptyState = ({ title, message }) => (
  <div className="notification">
    {title}
    <strong>{message}</strong>
  </div>
);

export default EmptyState;
