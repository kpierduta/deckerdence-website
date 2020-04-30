import React from 'react';
import styled from 'styled-components';

const Section = styled.div``;

const TileItem = () => (
  <Section className="section">
    <div className="container">
      <div className="tile is-ancestor">
        <div className="tile is-5 is-vertical is-parent">
          <div className="tile is-child">
            <p className="title is-5 has-text-weight-bold is-family-primary">
              One
            </p>
            <p className="subtitle is-5 is-family-primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
          <div className="tile is-child">
            <p className="title is-5 has-text-weight-bold is-family-primary">
              One
            </p>
            <p className="subtitle is-5 is-family-primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child">
            <figure className="image is-5by4">
              <img src="/images/hire/bus.jpg" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default TileItem;
