import React from 'react';
import styled from 'styled-components';

import MyMapComponent from './GoogleMap';

const Section = styled.div`
  background-color: ${props => props.theme.textColorLite};
  .columns {
    background-image: url('/images/contacts/frame@2x.png');
    background-size: contain;
    background-repeat: no-repeat;
  }
  .is-10 {
    padding: 6.5rem 0rem;
  }
`;

const Address = () => (
  <Section className="section is-hidden-mobile">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-10">
          <MyMapComponent isMarkerShown className="is-hidden-mobile" />
        </div>
      </div>
    </div>
  </Section>
);

export default Address;
