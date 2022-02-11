import React from 'react';
import styled from 'styled-components';
import SanityImage from '../global/SanityImage';

const Section = styled.section`
  margin-top: -4.5rem;
`;

const Card = styled.div`
  background-color: ${props => props.theme.tealBackground};
`;

const Venues = props => {
  const { venue = [] } = props;
  return (
    <Section className="section">
      <div className="container">
        <div className="columns">
          {venue.map(item => (
            <div className="column" key={item.id}>
              <Card className="has-text-centered p-5">
                <figure className="image is-128x128 m-auto">
                  {item.image && (
                    <SanityImage
                      fluid={item.image.asset.id}
                      alt="feature-img"
                    />
                  )}
                </figure>

                <p className="title is-2 has-text-weight-bold mt-5">
                  {item.title}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
export default Venues;
