import React from 'react';
import styled from 'styled-components';
import Button from './elments/Button';

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
    background-size: cover;
    background-position: center;
    display: grid;
    align-content: center;
    padding: 1rem 4rem;
    @media screen and (max-width: 768px) {
      margin-top: 0;
      margin-bottom: 0;
      padding: 1rem 2rem;
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

const HomePageSection = ({ title, description, flex, bgImg, bannerImg }) => (
  <Section flex={flex} bgImg={bgImg} bannerImg={bannerImg}>
    <div className="container">
      <div className="columns">
        <div className="column bg-image is-6">
          <h1 className="title is-2 has-text-white has-text-weight-semibold	is-spaced">
            {title}
          </h1>
          <h2 className="subtitle is-5 has-text-white has-text-weight-normal">
            {description}
          </h2>
          <Button
            image="/images/learn-more@2x.png"
            alt="Learn More Button"
            hasWidth="50%"
          />
        </div>
      </div>
    </div>
  </Section>
);

export default HomePageSection;
