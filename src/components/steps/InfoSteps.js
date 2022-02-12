import React from 'react';
import styled from 'styled-components';

import SanityImage from '../global/SanityImage';

const CardWrapper = styled.div`
  img {
    width: 200px;
    padding-bottom: 1.5rem;
  }
  .card-info {
    background: ${props => props.theme.backgroundDarkSecondary};
    padding: 3rem;
  }
  p {
    padding-top: 2rem;
  }
`;

const SingleCard = ({ src, title, description }) => (
  <CardWrapper className="column">
    <div className="has-text-centered">
      <SanityImage fluid={src} alt="" />
    </div>
    <div className="card-info">
      <h3 className="has-text-weight-bold">{title}</h3>
      <p>{description}</p>
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
              <SingleCard
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
