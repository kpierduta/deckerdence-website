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
  <Button className="button is-outlined is-large is-radiusless" type="button">
    <span className="is-uppercase has-text-weight-bold has-text-white is-size-6-mobile">
      {title}
    </span>
  </Button>
);

export default ButtonGlobal;
