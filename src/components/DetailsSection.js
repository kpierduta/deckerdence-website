import React from 'react';

import styled from 'styled-components';

import HireCard from './HireCard';

const Section = styled.div`
  .card {
    box-shadow: none;
  }
  .card-content {
    background-image: url(/images/events/frame@2x.png);
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 50rem;
  }
`;

class DetailsSection extends React.Component {
  render() {
    const {} = this.props;
    return (
      <Section className="section">
        <div className="container">
          <div className="columns is-variable is-4">
            <div className="column">
              <HireCard title="lol" />
            </div>
            <div className="column">
              <HireCard />
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default DetailsSection;
