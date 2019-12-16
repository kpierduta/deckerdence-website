import React from 'react';
import styled from 'styled-components';
import Button from './elments/Button';

const Section = styled.section`
  background-image: url('/images/events/photo@3x.png');
  background-size: cover;
  .first {
    height: 38rem;
    background-image: url('/images/events/box-1.png');
    margin-top: 6rem;
    background-repeat: no-repeat;
  }
  section {
    padding: 10rem 1.5rem 0rem 1.5rem;
  }
  .subtitle.is-5 {
    font-family: ${props => props.theme.primaryFontFamily};
  }
`;

const Weddings = () => (
  <Section className="section">
    <div className="container">
      <figure className="image">
        <img src="/images/events/bunting@2x.png" />
      </figure>
      <div className="columns">
        <div className="column is-8 first">
          <section className="section">
            <div className="container">
              <h1 className="title is-2 has-text-white has-text-weight-semibold	is-spaced">
                WEDDINGS
              </h1>
              <h1 className="subtitle is-5 has-text-white has-text-weight-normal">
                Say yes to the perfect wedding venue. Have your special day at
                our event space in the Warwickshire countryside or take our
                vintage mobile venue to a location of your choosing. Whether you
                want to go traditional with silver service or festival-style
                with the best street food vendors, we can create your dream
                wedding.
              </h1>
              <Button />
            </div>
          </section>
        </div>
      </div>
    </div>
  </Section>
);

export default Weddings;
