import React from 'react';
import styled from 'styled-components';
import Button from './elements/Button';

const Section = styled.section`
  background-image: url(${props => props.bgImg});
  background-size: cover;
  .columns {
    justify-content: ${props => (props.flex ? 'flex-end' : 'flex-start')};
    @media screen and (max-width: 768px) {
      padding-top: 2rem;
    }
  }
  .bg-image {
    height: 46rem;
    background-image: url(${props => props.bannerImg});
    background-repeat: no-repeat;
    margin-top: 4rem;
    margin-bottom: 4rem;
    background-size: 100% 100%;
    background-position: center;
    display: grid;
    align-content: center;
    padding: 1rem 7rem;
    @media screen and (max-width: 768px) {
      margin-top: 0;
      margin-bottom: 0;
      padding: 1rem 2rem;
      background-size: cover;
    }
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
}) => (
  <Section flex={flex} bgImg={bgImg} bannerImg={bannerImg}>
    <div className="container">
      <div className="columns">
        <div className="column is-6">
          <div className="bg-image">
            {title && (
              <h1 className="title is-2 has-text-white has-text-weight-normal	is-spaced">
                {title}
              </h1>
            )}
            {description && (
              <h2 className="subtitle is-5 has-text-white has-text-weight-normal">
                {description}
              </h2>
            )}
            {button && (
              <Button
                image="/images/learn-more@2x.png"
                alt="Learn More Button"
                hasWidth="50%"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default HomePageSection;
