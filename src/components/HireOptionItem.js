import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  .frame {
    width: 23rem;
    position: relative;
    top: 0;
    left: 0;
  }
  .image {
    width: 19rem;
    position: absolute;
    top: 2.5625rem;
    left: 1.75rem;
  }
  .columns {
    flex-direction: ${props => (props.flex ? 'row-reverse' : '')};
  }
  .content {
    padding: 3rem 6.5rem;
  }
  .is-inline-block {
    margin: 0rem 1.5rem 2rem 1.5rem;
  }
  .price {
    margin-top: 2rem !important;
  }
`;

const HireOptionItem = ({
  frame,
  image,
  option,
  title,
  description,
  price,
  altBg,
  altImg,
  flex,
}) => (
  <Section className="section" flex={flex}>
    <div className="container">
      <div className="columns">
        <div className="column">
          <img className="frame" src={frame} alt={altBg} />
          <img className="image" src={image} alt={altImg} />
        </div>
        <div className="column is-8 has-text-centered">
          <img src="/images/hire/red.png" alt="" />
          <div className="is-inline-block">
            <h3 className="title is-3 has-text-warning ">{option}</h3>
          </div>
          <img src="/images/hire/red-2.png" alt="" />
          <h5 className="title is-2 is-spaced has-text-warning ">{title}</h5>
          <h5 className="subtitle is-5 has-text-weight-medium">
            {description}
          </h5>
          <h3 className="title is-5 price">hire from {price}</h3>
          <button
            type="button"
            className="button is-primary is-large title is-5"
          >
            Find out more
          </button>
        </div>
      </div>
    </div>
  </Section>
);

export default HireOptionItem;
