import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  span {
    font-size: ${props => props.theme.fontFullLarge};
    color: ${props => props.theme.lightAccent};
    padding-top: 1rem;
  }
`;

const SubTitle = ({ subTitle }) => (
  <Wrapper>
    <span className="subtitle is-uppercase has-text-weight-bold is-size-2-mobile">
      {subTitle}
    </span>
  </Wrapper>
);

export default SubTitle;
