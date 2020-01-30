import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background-image: url(/images/parties/photo-black-and-white@2x.png);
  background-repeat: no-repeat;
  background-size: cover;
  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.6rem;
  }
  .image-wrapper {
    position: relative;
  }
`;

class VenueSection extends React.Component {
  render() {
    const { leftFrame, leftText, rightFrame, rightText } = this.props;
    return (
      <Section className="hero section is-block is-relative  is-medium">
        <div className="container">
          <div className="columns is-vcentered is-desktop">
            <div className="column is-5-desktop">
              <div className="image-wrapper">
                <figure className="image">
                  <img src={leftFrame} alt="Frame" />
                </figure>
                <p className="text has-text-centered">{leftText}</p>
              </div>
            </div>
            <div className="column is-2" />
            <div className="column is-5-desktop">
              <div className="image-wrapper">
                <figure className="image">
                  <img src={rightFrame} alt="SecondFrame" />
                </figure>
                <p className="text">{rightText}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default VenueSection;
