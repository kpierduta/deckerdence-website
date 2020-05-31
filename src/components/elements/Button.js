import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const LinkStyled = styled(Link)`
  img {
    width: ${props => (props.haswidth ? props.haswidth : '100%')};
    @media screen and (max-width: 768px) {
      width: auto;
    }
  }
  figure {
    margin: 0 auto;
  }
`;

const Button = ({ image, alt, haswidth, linkTo }) => (
  <LinkStyled to={linkTo} haswidth={haswidth}>
    <figure className="image-button">
      <img src={image} alt={alt} />
    </figure>
  </LinkStyled>
);

export default Button;
