import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Linkstyled = styled(Link)`
  .image-button {
    width: 15%;
  }
  img {
    display: flex;
    align-items: center;
    justify-content: center;
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
