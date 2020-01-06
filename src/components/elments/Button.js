import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Linkstyled = styled(Link)`
  .image-button {
    width: 45%;
  }
`;

const Button = props => (
  <Linkstyled to="/">
    <figure className="image-button">
      <img src="/images/learn-more@3x.png" alt="" />
    </figure>
  </Linkstyled>
);

export default Button;
