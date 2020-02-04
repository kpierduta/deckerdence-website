import React, { useEffect } from 'react';
import styled from 'styled-components';
import move from 'move-js';

const Section = styled.section`
  background-image: url('/images/home/background.png');

  .columns.is-centered {
    margin-top: 31rem;
  }
`;

const MovingContainer = styled.div`
  position: absolute;
  left: 0;
`;

const HomeHero = () => {
  useEffect(() => {
    move('#left-moving-item')
      .translate(300, -700)
      .delay('3s')
      .duration('3s')
      .end();
    // move('#right-moving-item')
    //   .translate(-300, -700)
    //   .delay('3s')
    //   .duration('3s')
    //   .end();
    // TO rotate
    // https://codepen.io/vitoralberto/pen/OPYyYB
  }, []);

  return (
    <Section className="section">
      <div className="container">
        <figure className="image">
          <img src="/images/home/title-banner@2x.png" alt="" />
        </figure>
        <div className="columns  is-centered">
          <div className="column is-10 has-text-centered">
            <h1 className="title is-2 has-text-white has-text-weight-semibold	">
              Get in Touch!
            </h1>
            <h1 className="title is-3 has-text-white has-text-weight-semibold	">
              <span className="has-text-grey-lighter has-text-weight-light ">
                Email:
              </span>
              enquiries@deckerdence.com{' '}
              <span className="has-text-grey-lighter has-text-weight-light">
                OR Call:
              </span>
              01675 463555
            </h1>
          </div>
        </div>
        <MovingContainer>
          <img id="left-moving-item" src="/images/dummy.jpg" alt="dummy" />
          <img id="right-moving-item" src="/images/dummy.jpg" alt="dummy" />
        </MovingContainer>
      </div>
    </Section>
  );
};

export default HomeHero;
