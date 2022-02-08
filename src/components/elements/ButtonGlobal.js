import React from 'react';

import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border: 2px solid #fff;
  :hover,
  :focus {
    border: 2px solid #fff;
  }
`;

const ButtonGlobal = ({ title }) => (
  <Button className="button is-outlined is-medium is-radiusless" type="button">
    <span className="title is-6 is-uppercase has-text-white">{title}</span>
  </Button>
);

export default ButtonGlobal;
