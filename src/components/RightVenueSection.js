import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background-image: url(/images/lack.png);
  background-repeat: no-repeat;
  background-size: cover;
  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
  }
  .image-wrapper {
    position: relative;
  }
`;

class RightVenueSection extends React.Component {
  render() {
    const {} = this.props;
    return (
      <Section className="hero section is-block is-relative  is-medium">
        <div className="container">
          <div className="columns is-vcentered is-desktop">
            <div className="column is-5-desktop" />
            <div className="column is-1" />
            <div className="column is-6-desktop">
              <div className="image-wrapper">
                <figure className="image">
                  <img src="/images/frame@2x.png" alt="" />
                </figure>
                <p className="text">ddddfdfdkfdjf</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default RightVenueSection;
