import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  position: relative;
  @media only screen and (max-width: 768px) {
    span,
    h1 {
      font-size: 14px !important;
      margin: 0;
    }
  }
  /* @media screen and (max-width: 767px) {
    background-size: 100% 100%;
    height: 21rem;
  } */
  /* @media only screen and (max-width: 2900px) and (min-width: 1700px) {
    background-size: cover;
    width: 100%;
    height: 1330px;
  } */
  /* .columns.is-centered {
    margin-top: 25rem;
    @media screen and (max-width: 768px) {
      margin-top: 0;
    }
    @media only screen and (max-width: 2900px) and (min-width: 1700px) {
      margin-top: 48rem;
    }
  } */

  /* .axis:hover .move-ne {
    transform: translate(150px, -90px);
    @media (max-width: 767px) {
      transform: translate(30px, -40px);
    }
  } */
  /* .axis:hover .move-two {
    transform: translate(-150px, -90px);
    @media (max-width: 767px) {
      transform: translate(-30px, -50px);
    }
  } */
  /* .object {
    transition: all 2s ease-in-out;
  } */
`;

const Container = styled.div`
  /* img {
    width: 5rem;
    position: absolute;
    bottom: 9rem;
    @media only screen and (max-width: 2500px) and (min-width: 1700px) {
      bottom: 16rem;
    }
    @media only screen and (max-width: 2900px) and (min-width: 2500px) {
      bottom: 13rem;
    }
    @media screen and (max-width: 768px) {
      height: 6rem;
      width: 3rem;
      bottom: -11rem;
    }
  } */
`;

const MovingLeftContainer = styled(Container)`
  /* img {
    left: 0;
    @media screen and (max-width: 768px) {
      left: -1.5rem;
    }
  } */
`;

const MovingRightContainer = styled(Container)`
  /* img {
    right: 0;
    @media screen and (max-width: 768px) {
      right: -0.5rem;
    }
  } */
`;

const Content = styled.div`
  /* @media screen and (max-width: 768px) {
    position: absolute;
    bottom: -12.5rem !important;
    left: 2rem;
  }
  @media screen and (max-width: 768px) {
    .title {
      line-height: 16px !important;
    }
  }

  .title:not(:last-child) {
    margin-bottom: 0.5rem;
  }
  .column {
    @media only screen and (max-width: 2900px) and (min-width: 1700px) {
      margin-top: 7.5rem;
    }
  } */
`;

const HomeHero = ({ items }) => {
  return (
    <Section
      className="section hero is-large "
      bgImage={items.homeHeroBackgroundImage.asset.url}
    >
      <div className="container">
        {/* <div className="columns axis">
          <MovingLeftContainer className="column rocket object plane move-ne">
            <img
              className="object plane move-ne"
              src="/images/parties/layer-802@2x.png"
              alt=""
            />
          </MovingLeftContainer>
          <MovingRightContainer className="column rocket  object plane move-two">
            <img
              className="object plane move-two"
              src="/images/parties/layer-797@2x.png"
              alt=""
            />
          </MovingRightContainer>
        </div> */}
      </div>
      {/* <Content className="columns is-centered is-relative">
        <div className="column is-8 has-text-centered">
          <h1 className="title is-3 has-text-white has-text-weight-semibold">
            FIND OUT MORE
          </h1>
          <h1 className="title is-4 has-text-white has-text-weight-semibold">
            <span className="has-text-grey-lighter has-text-weight-light">
              Email:
            </span>
            <span className="">{items.email}</span>
            <span className="has-text-grey-lighter has-text-weight-light">
              {' '}
              OR Call:
            </span>
            <span className="">{items.telephone}</span>
          </h1>
        </div>
      </Content> */}
    </Section>
  );
};

export default HomeHero;
