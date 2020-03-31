import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  position: relative;
  @media screen and (max-width: 768px) {
    background-size: 100% 100%;
    height: 24rem;
  }
  @media only screen and (max-width: 2900px) and (min-width: 1700px) {
    background-size: cover;
    width: 100%;
    height: 1330px;
  }
  .columns.is-centered {
    margin-top: 30rem;
    @media screen and (max-width: 768px) {
      margin-top: 0;
    }
    @media only screen and (max-width: 2900px) and (min-width: 1700px) {
      margin-top: 48rem;
    }
  }
  figure {
    width: 60%;
    margin: 0 auto;
  }

  .axis:hover .move-ne {
    transform: translate(200px, -150px);
  }
  .axis:hover .move-two {
    transform: translate(-200px, -150px);
  }
  .object {
    transition: all 2s ease-in-out;
  }
`;

const Container = styled.div`
  img {
    width: 5rem;
    position: absolute;
    bottom: 12rem;
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

const HomeHero = ({ items }) => {
  return (
    <Section
      className="section"
      bgImage={items.homeHeroBackgroundImage.asset.url}
    >
      <div className="container">
        <figure className="image">
          <img src={items.homeHeroBannerImage.asset.url} alt="" />
        </figure>
        <Content className="columns is-centered">
          <div className="column is-8 has-text-centered">
            <h1 className="title is-2 is-size-7-mobile has-text-white has-text-weight-semibold">
              Get in Touch!
            </h1>
            <h1 className="title is-3 is-size-7-mobile has-text-white has-text-weight-semibold">
              <span className="has-text-grey-lighter has-text-weight-light">
                Email:
              </span>
              {items.email}
              <span className="has-text-grey-lighter has-text-weight-light">
                OR Call:
              </span>
              {items.telephone}
            </h1>
          </div>
        </Content>
        <div className="columns axis">
          <MovingLeftContainer className="column rocket  object plane move-ne">
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
        </div>
      </div>
    </Section>
  );
};

export default HomeHero;
