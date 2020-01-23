import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .card-content {
    background-image: url(/images/events/frame@2x.png);
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 40rem;
    padding-top: 8rem;
  }
`;

class DetailsCard extends React.Component {
  render() {
    const { para } = this.props;
    return (
      <Section className="section column is-6">
        <div className="container">
          <div className="card-content">
            <div className="content">
              <p className="subtitle is-4 has-text-weight-normal has-text-centered has-text-black">
                {para}
              </p>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default DetailsCard;
