import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  position: relative;
  @media screen and (min-width: 1024px) {
    padding: 20rem 1.5rem !important;
  }
  @media only screen and (max-width: 768px) {
    padding: 7rem 1.5rem !important;
    span,
    h1 {
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
            </div>
          </Content>
        </div>
      </Section>
    </div>
  );
};

export default HomeHero;
