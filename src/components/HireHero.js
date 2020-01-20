import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-image: url('/images/hire/background.png');
  .column {
    background-image: url('/images/hire/frame.png');
    background-repeat: no-repeat;
    height: 34rem;
  }
  .title.is-4 {
    margin-top: 2rem;
  }
`;

class HireHero extends React.Component {
  render() {
    const { title, subtitle, para } = this.props;
    return (
      <Section className="section">
        <div className="container">
          <div className="columns  is-centered">
            <div className="column is-9 has-text-centered">
              <section className="section">
                <div className="container">
                  <h1 className="title is-4 has-text-white has-text-weight-normal">
                    {title}
                  </h1>
                  <h1 className="title is-1 has-text-white has-text-weight-semibold	">
                    {subtitle}
                  </h1>
                  <img src="/images/hire/decorative-line.png" alt="" />
                  <h1 className="subtitle is-4 has-text-white">{para}</h1>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default HireHero;
