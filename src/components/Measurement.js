import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  .card {
    border: 3px solid ${props => props.theme.borderColor};
  }
`;

class Measurement extends React.Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <Section className="column is-half">
        <div className="card">
          <div className="card-content">
            <h1 className="title is-3 is-spaced">{title} </h1>
            <h1 className="subtitle is-4">{subtitle}</h1>
          </div>
        </div>
      </Section>
    );
  }
}

export default Measurement;
