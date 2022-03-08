import React from 'react';
import styled from 'styled-components';
import SanityImage from './global/SanityImage';

const Section = styled.div`
  .button {
    margin: 10px 0px 0px 0px;
    border: 2px solid ${props => props.theme.darkShades};
    font-family: ${props => props.theme.secondaryFontFamily};
    letter-spacing: 1px;
  }

  .card-content {
    align-items: end;
    height: 100%;
    display: grid;
  }
  @media screen and (max-width: 769px) {
    h2 {
      font-size: 16px !important;
    }
  }

  .card-image {
    background-color: ${props => props.theme.backgroundColor};
  }
`;

const ImageWrapper = styled.div`
  justify-content: center;
`;

const Content = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  margin-top: 1.5rem;
  padding-bottom: 1rem;
  padding: 1rem;
  min-height: 300px;
`;

const PopularIconWrapper = styled.div`
  margin-top: ${props => props.marginTop};
  z-index: 9999;
  p {
    color: ${props => props.theme.dangerLite};
  }
`;

const StagesCardItem = ({
  title,
  image,
  price,
  subtitle,
  guests,
  mostPopular,
  secondary,
}) => {
  return (
    <Section className="column">
      <div className="card-content">
        <div className="card-image">
          {secondary ? (
            <figure className="image is-square">
              <img className="is-rounded" src={image} alt="IconImage" />
            </figure>
          ) : (
            <ImageWrapper className="media align">
              <SanityImage
                className="is-rounded"
                gatsbyImageData={image}
                alt="IconImage"
              />
            </ImageWrapper>
          )}
        </div>
        <Content>
          {mostPopular && (
            <PopularIconWrapper
              className="has-text-centered"
              marginTop="-2.5rem"
            >
              <img src="/images/star.svg" alt="most-popular" width="40px" />
              <p className="is-size-5 has-text-weight-bold">Most Popular</p>
            </PopularIconWrapper>
          )}
          {!mostPopular && (
            <PopularIconWrapper marginTop="2.5rem"> </PopularIconWrapper>
          )}
          <h2 className="title py-3 is-4 has-text-centered">{title}</h2>
          <p className="subtitle is-5 has-text-weight-normal has-text-centered">
            {guests} guests
          </p>
          <p className="subtitle is-5 has-text-weight-normal has-text-centered">
            {subtitle}
          </p>
          <p className="subtitle is-5 has-text-weight-bold has-text-centered">
            {price}
          </p>
        </Content>
      </div>
    </Section>
  );
};

export default StagesCardItem;