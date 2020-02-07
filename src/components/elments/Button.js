import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const LinkStyled = styled(Link)`
  img {
    width: ${props => (props.hasWidth ? props.hasWidth : '100%')};
  }
  figure {
    margin: 0 auto;
  }
`;

const Button = ({ image, alt, hasWidth }) => (
  <LinkStyled to="/" hasWidth={hasWidth}>
    <figure className="image-button">
      <img src={image} alt={alt} />
    </figure>
  </LinkStyled>
);

export default Button;
