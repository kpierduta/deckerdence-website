import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const LinkStyled = styled(Link)`
  img {
    width: ${props => (props.haswidth ? props.haswidth : '100%')};
  }
  figure {
    margin: 0 auto;
  }
`;

const Button = ({ image, alt, haswidth }) => (
  <LinkStyled to="/" haswidth={haswidth}>
    <figure className="image-button">
      <img src={image} alt={alt} />
    </figure>
  </LinkStyled>
);

export default Button;
