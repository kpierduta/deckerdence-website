import React from 'react';
import styled from 'styled-components';

import SanityImage from '../global/SanityImage';

const CardWrapper = styled.div`
  img {
    width: 200px;
  }
  .card-info {
    background: ${props => props.theme.backgroundDarkSecondary};
  }
`;

const InfoStepsItem = ({ src, title, description }) => (
  <CardWrapper className="column">
    <div className="has-text-centered p-5">
      <SanityImage fluid={src} alt="" />
    </div>
    <div className="card-info p-6">
      <h1 className="has-text-weight-bold">{title}</h1>
      <p className="pt-4">{description}</p>
    </div>
  </CardWrapper>
);

const InfoSteps = ({ stepBlock = [] }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          {stepBlock &&
            stepBlock.map(item => (
              <InfoStepsItem
                key={item._key}
                src={item.image && item.image.asset.id}
                title={item.title}
                description={item.description}
              />
            ))}
        </div>
      </div>
    </section>
  );
};
export default InfoSteps;
