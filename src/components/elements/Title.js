import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  span {
    color: ${props => props.theme.lightAccent};
    font-size: ${props => props.theme.fontSizeExtra}px;
  }
`;

const Title = ({ title }) => (
  <Wrapper>
    <span className="title is-uppercase has-text-weight-normal is-size-3-mobile">
      {title}
    </span>
  </Wrapper>
);

export default Title;
