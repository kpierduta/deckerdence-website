import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  .column {
    background-image: url('/images/events/frame@2x.png');
    background-size: cover;
  }
`;

class DetailsSection extends React.Component {
  render() {
    const {} = this.props;
    return (
      <Section className="section">
        <div className="container">
          <div className="columns is-variable is-4">
            <div className="column">First column</div>
            <div className="column">Second column</div>
          </div>
        </div>
      </Section>
    );
  }
}

export default DetailsSection;
