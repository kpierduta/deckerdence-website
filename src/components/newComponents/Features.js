import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-top: -4.5rem;
`;

const CardsContainer = styled.div``;

const Card = styled.div`
  background-color: ${props => props.theme.cardBackground};
  padding: 1.5rem 0rem;
  img {
    width: 100px;
    height: auto;
  }
  p {
    font-size: ${props => props.theme.fontSizeExtra}px;
    padding-top: 25px;
  }
`;

const FeatureCard = ({ src, title }) => (
  <Card className="has-text-centered">
    <img src={src} alt="feature-img" />
    <p className="has-text-weight-bold is-uppercase">{title}</p>
  </Card>
);

const features = [
  { id: 1, img: '/images/new/weddings.png', title: 'Weddings' },
  { id: 2, img: '/images/new/parties.png', title: 'Parties' },
  { id: 3, img: '/images/new/events.png', title: 'Events' },
];

const Features = () => (
  <Section className="section">
    <div className="container">
      <CardsContainer className="columns">
        {features.map(feature => (
          <div className="column" key={feature.id}>
            <FeatureCard src={feature.img} title={feature.title} />
          </div>
        ))}
      </CardsContainer>
    </div>
  </Section>
);

export default Features;
