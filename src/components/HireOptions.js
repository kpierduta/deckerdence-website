import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  background-image: url(${props => props.hirebgImage});
  background-size: contain;
  background-repeat: no-repeat;
  .text {
    font-size: 6rem;
  }
`;

class HireOptions extends React.Component {
  render() {
    const { hirebgImage } = this.props;
    return (
      <Section className="section hero is-large" hirebgImage={hirebgImage}>
        <div className="container">
          <div className="columns is-vcentered is-desktop">
            <div className="column has-text-centered-desktop">
              <h2 className="title is-1 has-text-white">Option 1</h2>
              <h2 className="text subtitle is-1 has-text-weight-bold has-text-white">
                Deckerdence <br />
                Vintage Bus Bar
              </h2>
              <h2 className="subtitle is-1 has-text-white">
                BESPOKE DRINKS OPTIONS AVAILABLE
              </h2>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default HireOptions;
