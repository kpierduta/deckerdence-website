import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  @media screen and (min-width: 1024px) {
    padding: 13rem 1.5rem !important;
  }
  @media only screen and (min-width: 1408px) {
    padding: 16rem 1.5rem !important;
  }
  background-image: url(${props => props.frameBgImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .columns {
    justify-content: ${props => (props.flex ? 'flex-end' : 'flex-start')};
  }
  .hero {
    background-image: url('/images/frame.png');
    background-size: 100% 100%;
  }
  .hero.is-medium .hero-body {
    padding-bottom: 6rem !important;
    padding-top: 6rem !important;
    padding-right: 4rem !important;
    padding-left: 4rem !important;
  }
  p {
    color: #fff !important;
  }
`;

const VenueSection = ({ title, image, color }) => {
  return (
    <Section
      className="section is-medium"
      frameBgImage={image.asset.url}
      flex
      color={color}>
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-5 hero is-medium">
            <div className="hero-body">
              <p className="title is-4 is-size-6-mobile text has-text-centered has-text-weight-semibold">
                {title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default VenueSection;
