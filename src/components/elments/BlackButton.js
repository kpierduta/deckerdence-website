import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Linkstyled = styled(Link)`
  .image-button {
    width: 45%;
  }
`;

const BlackButton = props => (
  <Linkstyled to="/">
    <figure className="image-button is-pulled-right">
      <img src="/images/view-more@3xx.png" alt="" />
    </figure>
  </Linkstyled>
);

export default BlackButton;
