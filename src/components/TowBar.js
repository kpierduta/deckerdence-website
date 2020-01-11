import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  background-image: url('/images/towbar/photo@2x.png');
  background-size: cover;
  background-repeat: no-repeat;
  .column {
    background-image: url('/images/towbar/frame@2x.png');
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 36rem;
    @media screen and (max-width: 768px) {
      min-height: 13rem;
    }
  }
`;

class Testimonials extends React.Component {
  render() {
    const {} = this.props;
    return (
      <Section className="section hero is-medium is-block">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-10 section is-medium ">
              <p className="title is-3 has-text-centered has-text-white">
                Event Hire
              </p>
              <p className="subtitle is-3  has-text-centered has-text-white">
                With Deckerdence or on its own
              </p>
              <p className="subtitle is-4 has-text-centered has-text-white">
                The Tow Bar can be hired full staffed and stocked or dry hire is
              </p>
              <p className="subtitle is-4  has-text-centered has-text-white">
                The Tow Bar can be hired full staffed and stocked or dry hire is
              </p>
              <p className="subtitle is-4  has-text-centered has-text-white">
                The Tow Bar can be hired full staffed and stocked or dry hire is
              </p>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default Testimonials;
