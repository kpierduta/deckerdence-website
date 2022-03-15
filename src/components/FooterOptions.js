import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const LinkStyled = styled(Link)`
  h4 {
    padding: 1rem 0;
    border-bottom: 1px solid #000;
  }
`;

const FooterOption = ({ option, link }) => (
  <LinkStyled to={link}>
    <h4 className="subtitle is-5">{option}</h4>
  </LinkStyled>
);

export default FooterOption;
