import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  background-image: url(${props => props.hirebgImage});
  background-size: contain;
  background-repeat: no-repeat;
  @media screen and (max-width: 768px) {
    background-size: cover;
  }
  .text {
    font-size: 6rem;
    padding: 0rem 9rem;
    @media screen and (max-width: 768px) {
      padding: 0rem 0rem;
    }
  }
  .has-text-white {
    color: ${props => props.textcolor} !important ;
  }
`;

class HireOptions extends React.Component {
  render() {
    const {
      hirebgImage,
      mainTitle,
      subTitle,
      centerText,
      textcolor,
    } = this.props;
    return (
      <Section
        className="section hero is-large"
        hirebgImage={hirebgImage}
        textcolor={textcolor}
      >
        <div className="container">
          <div className="columns is-vcentered is-desktop">
            <div className="column has-text-centered ">
              <h2 className="title is-spaced is-1 has-text-white is-size-6-mobile">
                {mainTitle}
              </h2>
              <h2 className="text subtitle is-1 has-text-weight-bold has-text-white is-size-5-mobile">
                {centerText}
              </h2>
              <h2 className="subtitle is-1 has-text-white is-size-6-mobile">
                {subTitle}
              </h2>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default HireOptions;
