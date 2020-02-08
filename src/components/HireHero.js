import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-image: url('/images/hire/background.png');
  .column {
    background-image: url('/images/hire/frame.png');
    background-repeat: no-repeat;
    background-position: cover;
    background-size: 100% 100%;
    padding: 5rem;
    justify-content: space-between;
  }
  .title.is-1 {
    font-size: 4rem;
  }
`;

class HireHero extends React.Component {
  render() {
    const { title, subtitle, para } = this.props;
    return (
      <Section className="hero is-primary is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-9 has-text-centered">
                <h1 className="title is-2 has-text-white has-text-weight-normal">
                  {title}
                </h1>
                <h1 className="title is-1 has-text-white has-text-weight-semibold	">
                  {subtitle}
                </h1>
                <img src="/images/hire/decorative-line.png" alt="" />
                <h1 className="subtitle is-3 has-text-white">{para}</h1>
              </div>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default HireHero;
