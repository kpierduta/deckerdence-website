import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background-image: url(${props => props.FrameBgImage});
  background-repeat: no-repeat;
  background-size: cover;
  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.6rem;
  }
`;
const ImageWrapper = styled.div`
  position: relative;
`;

class VenueSection extends React.Component {
  render() {
    const {
      leftFrame,
      leftText,
      rightFrame,
      rightText,
      leftAlt,
      rightAlt,
      FrameBgImage,
    } = this.props;
    return (
      <Section
        className="hero section is-block is-relative  is-large"
        FrameBgImage={FrameBgImage}
      >
        <div className="container">
          <div className="columns is-vcentered is-desktop">
            <div className="column is-5-desktop">
              <ImageWrapper>
                <figure className="image">
                  <img src={leftFrame} alt={leftAlt} />
                </figure>
                <p className="text has-text-centered has-text-black">
                  {leftText}
                </p>
              </ImageWrapper>
            </div>
            <div className="column is-2" />
            <div className="column is-5-desktop">
              <ImageWrapper>
                <figure className="image">
                  <img src={rightFrame} alt={rightAlt} />
                </figure>
                <p className="text has-text-centered has-text-white">
                  {rightText}
                </p>
              </ImageWrapper>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default VenueSection;
