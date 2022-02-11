import React from 'react';
import styled from 'styled-components';
import SanityImage from '../global/SanityImage';

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

const Venues = props => {
  const { venue = [] } = props;
  return (
    <Section className="section">
      <div className="container">
        <CardsContainer className="columns">
          {venue.map(item => (
            <div className="column" key={item.id}>
              <Card className="has-text-centered">
                {item.image && (
                  <SanityImage fluid={item.image.asset.id} alt="feature-img" />
                )}
                <p className="has-text-weight-bold is-uppercase">
                  {item.title}
                </p>
              </Card>
            </div>
          ))}
        </CardsContainer>
      </div>
    </Section>
  );
};
export default Venues;
