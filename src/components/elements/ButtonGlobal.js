import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Button = styled.button`
  /* background-color: ${props => props.theme.dangerColor}; */
  /* padding: 10px 15px; */
  cursor: pointer;
  color: ${props => props.theme.textBright};
`;

const ButtonGlobal = ({ title, to, className }) => (
  <Link to={to}>
    <Button
      type="button"
      className={`button is-danger is-uppercase has-text-weight-bold ${className}`}>
      {title}
    </Button>
  </Link>
);

export default ButtonGlobal;
