import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background-image: url(${props => props.frameBgImage});
  background-repeat: no-repeat;
  background-size: cover;
  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.6rem;
  }
  .columns {
    justify-content: ${props => (props.flex ? 'flex-end' : 'flex-start')};
  }
`;
const ImageWrapper = styled.div`
  position: relative;
`;

const VenueSection = ({ leftFrame, leftText, leftAlt, frameBgImage, flex }) => (
  <Section
    className="hero section is-block is-relative  is-large"
    frameBgImage={frameBgImage}
    flex={flex}
  >
    <div className="container">
      <div className="columns is-vcentered is-desktop">
        <div className="column is-5-desktop">
          <ImageWrapper>
            <figure className="image">
              <img src={leftFrame} alt={leftAlt} />
            </figure>
            <p className="text has-text-centered has-text-black">{leftText}</p>
          </ImageWrapper>
        </div>
      </div>
    </div>
  </Section>
);

export default VenueSection;
