import React from 'react';

import styled from 'styled-components';

const Section = styled.div``;

class HireOptions extends React.Component {
  render() {
    const {} = this.props;
    return (
      <Section className="section hero is-block is-relative is-white is-medium">
        <div className="container">
          <div className="columns is-vcentered is-desktop">
            <div className="column has-text-centered-desktop">
              <h2 className="title is-3">Option 1</h2>
              <h2 className="title is-2">Deckerdence</h2>
              <h2 className="title is-2">Vintage Bus Bar</h2>
              <h2 className="title is-2">BESPOKE DRINKS OPTIONS AVAILABLE</h2>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default HireOptions;
