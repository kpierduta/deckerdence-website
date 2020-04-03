import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

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
  h5,
  h3,
  .button {
    color: ${props => (props.flex ? '#fff' : '')};
  }
  .button {
    background: transparent;
    border: 2px solid ${props => (props.flex ? '#fff' : '')};
    font-family: ${props => props.theme.secondaryFontFamily};
    letter-spacing: 1px;
  }
  .is-square {
    width: 100%;
    height: 100%;
  }
  .is-square .img-top {
    display: none;
    position: absolute;
    z-index: 99;
  }
  .is-square:hover .img-top {
    display: inline;
  }
`;

const HireOptionItem = ({ item, onMouseOver }) => (
  <Section className="section" flex={item.columnReverse}>
    <div className="container">
      <div className="columns">
        <div className="column">
          <figure className="image is-square">
            <img
              src={item.hireOptionColoredImage.asset.url}
              onFocus={onMouseOver}
              alt="coloredImage"
            />
            <img
              src={item.hireOptionBlackImage.asset.url}
              className="img-top"
              alt="blackImage"
            />
          </figure>
        </div>
        <div className="column is-8 has-text-centered">
          <div className="is-inline-flex">
            <figure className="image is-24x24">
              <img src="/images/hire/red.png" alt="" />
            </figure>
            <h3 className="title is-4 has-text-warning ">
              {item.hireOptionTitle}
            </h3>
            <figure className="image is-24x24">
              <img src="/images/hire/red-2.png" alt="" />
            </figure>
          </div>
          <h5 className="title is-3 is-spaced has-text-warning ">
            {item.hireOptionSubtitle}
          </h5>
          <h5 className="subtitle is-5 has-text-weight-medium">
            {item.hireOptionDescription}
          </h5>
          <h3 className="title is-5 price">Hire from {item.hireOptionPrice}</h3>
          <Link
            to={`/hire/${item.slug.current}`}
            type="button"
            className="button is-large  is-size-5"
          >
            FIND OUT MORE
          </Link>
        </div>
      </div>
    </div>
  </Section>
);

export default HireOptionItem;
