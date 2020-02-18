import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-image: url('/images/home/background.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  position: relative;
  @media screen and (max-width: 768px) {
    background-size: 100% 100%;
    height: 24rem;
  }
  @media only screen and (max-width: 2900px) and (min-width: 1700px) {
    background-size: 100% 100%;
    height: 50rem;
  }

  .columns.is-centered {
    margin-top: 28rem;
    @media screen and (max-width: 768px) {
      margin-top: 0;
    }
    @media only screen and (max-width: 2900px) and (min-width: 1700px) {
      margin-top: 19rem;

      /* height: 1rem; */
    }
  }
  figure {
    width: 60%;
    margin: 0 auto;
  }
`;

const Container = styled.div`
  img {
    /* height: 9rem; */
    width: 5rem;
    position: absolute;
    bottom: 8rem;
    @media screen and (max-width: 768px) {
      height: 6rem;
      width: 3rem;
      bottom: -11rem;
    }
  }
`;

const MovingLeftContainer = styled(Container)`
  img {
    left: 0;
    @media screen and (max-width: 768px) {
      left: -1.5rem;
    }
  }
`;

const MovingRightContainer = styled(Container)`
  img {
    right: 0;
    @media screen and (max-width: 768px) {
      right: -0.5rem;
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

const Content = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    bottom: -15.5rem;
    left: 2rem;
  }
  .title:not(:last-child) {
    margin-bottom: 0.5rem;
  }
  .column {
    @media only screen and (max-width: 2900px) and (min-width: 1700px) {
      margin-top: 7.5rem;
    }
  }
`;

const HomeHero = () => (
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
      <Content className="columns is-centered">
        <div className="column is-10 has-text-centered">
          <h1 className="title is-2 is-size-7-mobile has-text-white has-text-weight-semibold">
            Get in Touch!
          </h1>
          <h1 className="title is-3 is-size-7-mobile has-text-white has-text-weight-semibold">
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
      </Content>
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
  </Section>
);

export default HomeHero;
