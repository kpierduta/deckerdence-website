import React, { useEffect } from 'react';
import styled from 'styled-components';

// const move = typeof window !== `undefined` ? require('move-js') : null;

const Section = styled.section`
  background-image: url('/images/home/background.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media all and (max-width: 768px) and (min-width: 520px) {
    background-size: 100% 100%;
  }
  .columns.is-centered {
    margin-top: 40rem;
  }
`;

const MovingLeftContainer = styled.div`
  img {
    height: 9rem;
    width: 5rem;
    position: absolute;
    bottom: 12rem;
    left: 0;
    @media screen and (max-width: 768px) {
      left: -2.5rem;
      bottom: 9rem;
    }
  }
`;
const MovingRightContainer = styled.div`
  img {
    height: 9rem;
    width: 5rem;
    position: absolute;
    right: 0;
    bottom: 12rem;
    @media screen and (max-width: 768px) {
      right: -1.5rem;
      bottom: 9rem;
    }
  }
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
    <Section className="section">
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
        <div className="columns is-centered">
          <div className="column is-10 has-text-centered">
            <h1 className="title is-2 is-size-3-mobile has-text-white has-text-weight-semibold">
              Get in Touch!
            </h1>
            <h1 className="title is-3 is-size-5-mobile has-text-white has-text-weight-semibold">
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
