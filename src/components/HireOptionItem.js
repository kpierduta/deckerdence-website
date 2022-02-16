import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import SanityImage from './global/SanityImage';

const Section = styled.section`
  background-color: ${props => (props.flex ? '#AAB3B6' : '')};
  .columns {
    flex-direction: ${props => (props.flex ? 'row-reverse' : '')};
  }
  .column {
    align-self: center;
  }
  .title.is-4 {
    padding: 0px 5px 0px 5px;
  }
  .price {
    margin-top: 2rem !important;
  }
  h1,
  h2 {
    color: ${props => (props.flex ? '#2c2c2a' : '#811112')};
  }
  p,
  h3,
  .button {
    color: ${props => (props.flex ? '#ffffff' : '#2c2c2a')};
  }
  .button {
    background: transparent;
    border: 2px solid ${props => (props.flex ? '#ffffff' : '#2c2c2a')};
    font-family: ${props => props.theme.secondaryFontFamily};
    letter-spacing: 1px;
  }
`;

const HireOptionItem = ({ item, onMouseOver, flex }) => {
  const [over, setOver] = useState(false);

  return (
    <Section className="section" flex={flex || item.columnReverse}>
      <div className="container">
        <div className="columns">
          <div className="column is-4 is-desktop">
            <figure
              className="image is-square pt-0"
              onFocus={() => setOver(true)}
              onBlur={() => setOver(false)}
              onMouseOver={() => setOver(true)}
              onMouseOut={() => setOver(false)}>
              <SanityImage
                fluid={
                  over
                    ? item.hireOptionBlackImage.asset.id
                    : item.hireOptionColoredImage.asset.id
                }
                onFocus={onMouseOver}
                alt="coloredImage"
              />
            </figure>
          </div>
          <div className="column is-3" />
          <div className="column is-5 has-text-centered">
            <div className="is-inline-flex">
              <figure className="image is-24x24">
                <img
                  src={
                    item.columnReverse
                      ? '/images/hire/black-one.png'
                      : '/images/hire/red.png'
                  }
                  alt=""
                />
              </figure>
              <h1 className="title is-4">{item.hireOptionTitle}</h1>
              <figure className="image is-24x24">
                <img
                  src={
                    item.columnReverse
                      ? '/images/hire/black-two.png'
                      : '/images/hire/red-2.png'
                  }
                  alt=""
                />
              </figure>
            </div>
            <h2 className="title is-3 is-spaced">{item.hireOptionSubtitle}</h2>
            <p className="subtitle is-5 has-text-weight-medium">
              {item.hireOptionDescription}
            </p>

            <h3 className="title is-5 price">
              {'  '}Hire from{'  '}
              {item.hireOptionPrice}
            </h3>
            <Link
              to={`/${item.slug.current}`}
              type="button"
              className="button is-large is-size-5">
              FIND OUT MORE
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HireOptionItem;
