import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .main {
    background-image: url('${props => props.boxImage}');

    background-size: 100% 100%;
    background-repeat: no-repeat;
    min-height: 45rem;
    padding-top: 8rem;
  }
`;

const DetailsCard = ({ para, boxImage }) => (
  <Section className="section column is-6" boxImage={boxImage}>
    <div className="container">
      <div className="main">
        <div className="card-content">
          <div className="content">
            <p className="subtitle is-5 has-text-centered has-text-black">
              {para}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default DetailsCard;
