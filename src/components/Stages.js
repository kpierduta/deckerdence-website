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

const Stages = ({ title, subtitle, image, alt }) => (
  <Section className="column">
    <div className="card-content">
      <div className="card-image">
        <ImageWrapper className="media align">
          <figure className="image is-128x128">
            <img className="is-rounded" src={image} alt={alt} />
          </figure>
        </ImageWrapper>
      </div>
      <p className="title is-size-3 is-size-4-mobile has-text-weight-normal is-spaced has-text-centered">
        {title}
      </p>
      <p className="subtitle is-4 is-size-5-mobile has-text-weight-normal has-text-centered">
        {subtitle}
      </p>
    </div>
  </Section>
);

export default Stages;
