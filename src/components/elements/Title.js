import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1`
  color: ${props =>
    props.dark ? props.theme.textDark : props.theme.lightAccent} !important;
  font-size: ${props => props.theme.fontSizeExtra}px;
`;

const Title = ({ children, dark }) => (
  <Wrapper
    className="title is-uppercase has-text-weight-normal is-size-3-mobile"
    dark={dark}>
    {children}
  </Wrapper>
);

export default Title;
