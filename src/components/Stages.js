import React from 'react';
import styled from 'styled-components';
import SanityImage from './global/SanityImage';

const Section = styled.div`
  .title {
    padding: 2rem 0;
  }

  .button {
    margin: 10px 0px 0px 0px;
    border: 2px solid ${props => props.theme.darkShades};
    font-family: ${props => props.theme.secondaryFontFamily};
    letter-spacing: 1px;
  }
  @media screen and (max-width: 769px) {
    h2 {
      font-size: 16px !important;
    }
  }

  @media screen and (min-width: 769px) {
    h2 {
      min-height: 6.5rem !important;
    }
  }

  .card-image {
    background-color: ${props => props.theme.backgroundColor};
    padding: 2rem 0;
  }
`;

const ImageWrapper = styled.div`
  justify-content: center;
  .image.is-128x128 {
    height: 14rem;
    width: 14rem;
  }
`;

const Content = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  margin-top: 1.5rem;
  padding-bottom: 1rem;
`;

const Stages = ({ title, image }) => (
  <Section className="column is-3">
    <div className="card-content">
      <div className="card-image">
        <ImageWrapper className="media align">
          <figure className="image is-128x128">
            <SanityImage
              className="is-rounded"
              gatsbyImage={image}
              alt="IconImage"
            />
          </figure>
        </ImageWrapper>
      </div>
      <Content>
        <h2 className="title is-4 has-text-centered">{title}</h2>
        <p className="subtitle is-5 has-text-weight-normal has-text-centered">
          150 - 300 guests
        </p>
        <p className="subtitle is-5 has-text-weight-normal has-text-centered">
          Seated up to 350 total capacity
        </p>
        <p className="subtitle is-5 has-text-weight-bold has-text-centered">
          £18,595
        </p>
      </Content>
    </div>
  </Section>
);

export default Stages;
