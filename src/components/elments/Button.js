import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Linkstyled = styled(Link)`
  .image-button {
    width: 25%;
  }
  figure {
    margin: 0 auto;
  }
`;

const Button = props => (
  <Linkstyled to="/">
    <figure className="image-button">
      <img src="/images/view-more@2x.png" alt="" />
    </figure>
  </Linkstyled>
);

export default Button;
