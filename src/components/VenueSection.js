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
  }
  .columns {
    justify-content: ${props => (props.flex ? 'flex-end' : 'flex-start')};
  }
`;
const ImageWrapper = styled.div`
  position: relative;
  p {
    color: ${props => (props.color ? '#fff' : '#000')} !important;
  }
`;

const VenueSection = ({ frame, alt, text, frameBgImage, flex, color }) => (
  <Section
    className="hero section is-block is-relative  is-large"
    frameBgImage={frameBgImage}
    flex={flex}
  >
    <div className="container">
      <div className="columns is-vcentered is-desktop">
        <div className="column is-5-desktop">
          <ImageWrapper color={color}>
            <figure className="image">
              <img src={frame} alt={alt} />
            </figure>
            <p className="title is-4 text has-text-centered">{text}</p>
          </ImageWrapper>
        </div>
      </div>
    </div>
  </Section>
);

export default VenueSection;
