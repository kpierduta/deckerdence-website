import React, { useEffect } from 'react';
import styled from 'styled-components';

// const move = typeof window !== `undefined` ? require('move-js') : null;

const Section = styled.section`
  background-image: url('/images/home/background.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  /* flex: 30 !important; */
  .columns.is-centered {
    /* margin-top: 40rem; */
    align-items: flex-end;
  }
`;

const MovingLeftContainer = styled.div`
  position: absolute;
  left: 0;
`;
const MovingRightContainer = styled.div`
  position: absolute;
  right: 0;
`;

const FireworkContainer = styled.div`
  position: absolute;
  right: 80px;
  .circular-image {
    width: 35%;
  }
  @keyframes rotate360 {
    to {
      transform: rotate(360deg);
    }
  }
  circular-image {
    animation: 2s rotate360 infinite linear;
  }
`;

const HomeHero = () => {
  // useEffect(() => {
  //   move('#left-moving-item')
  //     .translate(300, -450)
  //     .delay('3s')
  //     .duration('3s')
  //     .end();
  //   move('#right-moving-item')
  //     .translate(-200, -450)
  //     .delay('3s')
  //     .duration('3s')
  //     .end();
  //   // TO rotate
  //   // https://codepen.io/vitoralberto/pen/OPYyYB
  // }, []);

  return (
    <Section className="section is-large">
      <div className="container">
        <figure className="image">
          <img src="/images/home/title-banner@2x.png" alt="" />
        </figure>
        <FireworkContainer className="circle">
          <img
            className="circular-image"
            id="loading"
            src="/images/home/firework-5@2x.png"
            alt="circle"
          />
        </FireworkContainer>
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
          <div className="columns">
            <MovingLeftContainer className="column">
              <img
                id="left-moving-item"
                src="/images/parties/layer-802@2x.png"
                alt="Left-Rocket"
                width="40%"
              />
            </MovingLeftContainer>
            <MovingRightContainer className="column">
              <img
                id="right-moving-item"
                src="/images/parties/layer-797@2x.png"
                alt="Left-Rocket"
                width="40%"
              />
            </MovingRightContainer>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HomeHero;
