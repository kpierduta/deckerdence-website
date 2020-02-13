import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const LinkStyled = styled(Link)`
  figure {
    margin: 0 auto;
    width: ${props => (props.hasWidth ? props.hasWidth : '100%')};
    padding: 3rem 0rem;
  }
`;

const BlackButton = ({ image, alt, hasWidth }) => (
  <LinkStyled to="/" hasWidth={hasWidth}>
    <figure className="image-button">
      <img src={image} alt={alt} />
    </figure>
  </LinkStyled>
);

export default BlackButton;
