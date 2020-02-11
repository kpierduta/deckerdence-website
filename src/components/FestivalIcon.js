import React from 'react';
import styled from 'styled-components';

const Section = styled.div``;

const FestivalIcon = ({ image, alternative }) => (
  <Section className="section column is-3">
    <div className="container">
      <figure className="image">
        <img src={image} alt={alternative} />
      </figure>
    </div>
  </Section>
);

export default FestivalIcon;
