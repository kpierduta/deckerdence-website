import React from 'react';

import styled from 'styled-components';

const ImageWrapper = styled.div`
  justify-content: center;
  .image.is-128x128 {
    height: 14rem;
    width: 14rem;
  }
`;

const Stages = ({ title, subtitle, image, alt }) => (
  <section className="column is-4 is-multiline">
    <div className="card-content">
      <div className="card-image">
        <ImageWrapper className="media align">
          <figure className="image is-128x128">
            <img className="is-rounded" src={image} alt={alt} />
          </figure>
        </ImageWrapper>
      </div>
      <div className="card-content">
        <p className="title is-3 has-text-weight-normal is-spaced has-text-centered">
          {title}
        </p>
        <div className="content">
          <p className="subtitle is-4 has-text-weight-normal has-text-centered">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Stages;
