import React from 'react';
import styled from 'styled-components';

const Section = styled.section``;

const InfoCard = styled.div`
  background-color: ${props => props.theme.dangerColor};
  padding: 3rem;
  margin-bottom: 2.5rem;
  h1,
  p {
    color: ${props => props.theme.lightAccent};
  }
  p {
    padding-top: 2.5rem;
  }
`;

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
      <img src={src} alt="" />
    </div>
    <div className="card-info">
      <h3 className="has-text-weight-bold">{title}</h3>
      <p>{description}</p>
    </div>
  </CardWrapper>
);

const infoData = [
  {
    id: 1,
    src: '/images/new/one.png',
    title: 'Book a chat with us',
    description: 'A quick chat to see how Deckerdence is your perfect fit.',
  },
  {
    id: 2,
    src: '/images/new/two.png',
    title: 'venue tour',
    description:
      'Let the fun elements of the planning begin with us by your side.',
  },
  {
    id: 3,
    src: '/images/new/three.png',
    title: 'your perfect day',
    description: 'Have the day you always dreamt of hosted by Deckerdence.',
  },
];

const InfoSteps = () => (
  <Section className="section">
    <div className="container">
      <InfoCard>
        <h1 className="has-text-centered has-text-weight-bold">Simple Steps</h1>
        <p className="has-text-centered is-size-3">
          How to hire Deckerdence for your amazing wedding, part or event
        </p>
      </InfoCard>
      <div className="columns">
        {infoData.map(data => (
          <SingleCard
            key={data.id}
            src={data.src}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </div>
  </Section>
);

export default InfoSteps;
