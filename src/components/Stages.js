import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .title {
    padding: 3rem 0 0;
  }
`;

const ImageWrapper = styled.div`
  justify-content: center;
  .image.is-128x128 {
    height: 14rem;
    width: 14rem;
  }
`;

const Stages = ({ title, subtitle, image }) => (
  <Section className="column">
    <div className="card-content">
      <div className="card-image">
        <ImageWrapper className="media align">
          <figure className="image is-128x128">
            <img className="is-rounded" src={image} alt="IconImage" />
          </figure>
        </ImageWrapper>
      </div>
      <h2 className="title is-4 is-spaced has-text-centered">{title}</h2>
      <p className="subtitle is-5 has-text-weight-normal has-text-centered">
        {subtitle}
      </p>
    </div>
  </Section>
);

export default Stages;
