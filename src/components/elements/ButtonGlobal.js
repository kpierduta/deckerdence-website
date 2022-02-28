import React from 'react';
import { Link } from 'gatsby';

const ButtonGlobal = ({ title }) => (
  <Link
    className="button is-outlined is-medium has-background-danger-ter is-radiusless"
    type="button"
  >
    <span className="title is-6 is-uppercase has-text-white">{title}</span>
  </Link>
);

export default ButtonGlobal;
