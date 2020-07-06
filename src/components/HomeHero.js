import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Section = styled.section`
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  position: relative;

  @media screen and (max-width: 1023px) {
    padding: 20rem 1.5rem !important;
  }
  @media screen and (max-device-width: 761px), screen and (max-width: 1022px) {
    padding: 20rem 1.5rem !important;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1023px) and (orientation: portrait) {
    padding: 13rem 1.5rem !important;
  }
  @media only screen and (min-width: 1408px) {
    padding: 28rem 1.5rem !important;
  }
  @media only screen and (max-width: 767px) {
    padding: 7rem 1.5rem !important;
  }
  @media only screen and (max-width: 767px) {
    span,
    h1,
    a {
      font-size: 9px !important;
      margin: 0;
    }
  }
`;

const Content = styled.div`
  @media screen and (max-width: 768px) {
    .title {
      line-height: 10px !important;
    }
  }
  a:hover {
    color: #fff !important;
  }

  .title:not(:last-child) {
    margin-bottom: 0.1rem;
  }
  .main {
    position: absolute;
    top: 208px;
    left: 0;
    right: 0px;
    @media screen and (max-width: 768px) {
      top: 83px !important;
    }

    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
      top: 160px !important;
      margin-bottom: 1rem !important;
    }
    @media only screen and (min-width: 1408px) {
      top: 300px !important;
    }
    @media screen and (max-device-width: 761px),
      screen and (max-width: 1022px) {
      top: 151;
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
      .title.is-3 {
        margin-bottom: 0.3rem !important;
      }
    }
  }
`;

const HomeHero = ({ items }) => {
  return (
    <div>
      <Section
        className="section hero is-large is-block "
        bgImage={items.homeHeroBackgroundImage.asset.url}
      >
        <div className="container">
          <Content className="columns is-centered">
            <div className="column is-8 has-text-centered">
              <div className="main">
                <Link to="/hire">
                  <h1 className="title is-3 has-text-white has-text-weight-semibold">
                    FIND OUT MORE
                  </h1>
                </Link>
                <h1 className="title is-4 has-text-white has-text-weight-semibold">
                  <span className="has-text-grey-lighter has-text-weight-light">
                    Email:
                  </span>
                  <a href="mailto:enquiries@deckerdence.com"> {items.email}</a>
                  <span className="has-text-grey-lighter has-text-weight-light">
                    {' '}
                    OR Call:
                  </span>
                  <a className="" href="tel:01675463555">
                    {items.telephone}
                  </a>
                </h1>
              </div>
            </div>
          </Content>
        </div>
      </Section>
    </div>
  );
};

export default HomeHero;
