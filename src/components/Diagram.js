import React from 'react';

import styled from 'styled-components';

const Section = styled.div``;

const Diagram = ({ avatar, largeImage }) => (
  <Section className="section">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-6">
          <figure className={largeImage ? 'image is-1by1' : 'image is-3by2'}>
            <img src={avatar} alt="" />
          </figure>
        </div>
      </div>
    </div>
  </Section>
);

export default Diagram;
