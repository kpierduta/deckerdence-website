import React from 'react';
import styled from 'styled-components';

import MyMapComponent from './GoogleMap';

const Section = styled.div`
  background-color: ${props => props.theme.textColorLite};
  .columns {
    background-image: url('/images/contacts/frame@2x.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .is-10 {
    padding: 6.5rem 0rem;
  }
  p {
    margin-top: 2rem;
  }
`;

const AddressMap = () => (
  <Section className="section is-hidden-mobile">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-10">
          <MyMapComponent isMarkerShown />
        </div>
      </div>
    </div>
    <p className="has-text-white has-text-centered is-size-3">
      Visitors by appointment only
    </p>
  </Section>
);

export default AddressMap;
