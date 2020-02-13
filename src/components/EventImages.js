import React from 'react';
import styled from 'styled-components';

import Button from './elements/Button';

const Section = styled.div`
  margin-top: 5rem;
  .button-styled {
    margin: 2rem 0;
  }
`;

const EventImages = () => (
  <Section>
    <div className="columns is-multiline">
      <div className="column is-4">
        <img src="/images/events/middle-bg.png" alt="" />
      </div>
      <div className="column is-4">
        <img src="/images/events/middle-bg.png" alt="" />
      </div>
      <div className="column is-4">
        <img src="/images/events/middle-bg.png" alt="" />
      </div>
      <div className="column is-4">
        <img src="/images/events/middle-bg.png" alt="" />
      </div>
      <div className="column is-4">
        <img src="/images/events/middle-bg.png" alt="" />
      </div>
      <div className="column is-4">
        <img src="/images/events/middle-bg.png" alt="" />
      </div>
    </div>
    <div className="has-text-centered button-styled">
      <Button
        image="/images/view-more-black.png"
        alt="Learn More Button"
        hasWidth="20%"
      />
    </div>
  </Section>
);

export default EventImages;
