import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .box {
    border-radius: 0;
    width: 100%;
  }
`;

const TileItem = ({ title, subtitle }) => (
  <Wrapper className="column is-6 is-flex">
    <div className="box">
      <p className="title is-5 has-text-weight-bold is-family-primary">
        {title}
      </p>
      <p className="subtitle is-5 is-family-primary">{subtitle}</p>
    </div>
  </Wrapper>
);

export default TileItem;
