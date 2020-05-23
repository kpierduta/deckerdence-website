import React from 'react';
import styled from 'styled-components';
import Button from './elements/Button';

const Section = styled.section`
  background-image: url(${props => props.bgImg});
  background-size: 100% 100% !important;
  .columns {
    justify-content: ${props => (props.flex ? 'flex-end' : 'flex-start')};
    @media screen and (max-width: 768px) {
      padding-top: 2rem;
    }
  }
  .column {
    background-image: url(${props => props.bannerImg});
    padding: 0rem 7rem !important;
    @media only screen and (device-width: 768px) {
      padding: 90px 80px 70px 80px !important;
    }
    @media screen and (max-width: 767px) {
      padding: 90px 40px 70px 40px !important;
    }
    background-repeat: no-repeat;
    background-size: 100% 100% !important;
  }
  .subtitle.is-5 {
    font-family: ${props => props.theme.primaryFontFamily};
    line-height: 1.6;
  }
  h1 {
    padding-top: 1rem;
  }
`;

const HomePageSection = ({
  title,
  description,
  flex,
  bgImg,
  button,
  bannerImg,
  buttonLink,
}) => (
  <Section flex={flex} bgImg={bgImg} bannerImg={bannerImg}>
    <div className="section is-block">
      <div className="container">
        <div className="columns">
          <div className="column is-7 hero is-medium">
            <section className="hero-body">
              {title && (
                <h1 className="title is-3 has-text-white has-text-weight-normal	is-spaced has-text-centered-mobile">
                  {title}
                </h1>
              )}
              {description && (
                <p className="subtitle has-text-centered-mobile is-5 has-text-white has-text-weight-normal">
                  {description}
                </p>
              )}
              <div className="has-text-centered-mobile">
                {button && (
                  <Button
                    linkTo={buttonLink}
                    image="/images/learn-more@2x.png"
                    alt="Learn More Button"
                    haswidth="50%"
                  />
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default HomePageSection;
