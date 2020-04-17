import React from 'react';
import styled from 'styled-components';
import HireCard from './HireCard';

const Section = styled.section`
  background-color: ${props => (props.flex ? '#AAB3B6' : '#ffff')};
  .columns {
    flex-direction: ${props => (props.flex ? 'row-reverse' : '')};
  }
  .column {
    align-self: center;
  }
  .is-square {
    width: 100%;
    height: 100%;
  }
`;

const Wrapper = styled.div`
  background: ${props =>
    `url(${
      props.background
        ? 'images/contacts/slider-bg.png'
        : '/images/contacts/slider-bg.png'
    }) `};

  background-size: 100% 90%;
  background-repeat: no-repeat;
  background-position: center;

  .container h1:last-child {
    padding: 0 0 3rem;
  }
`;

const HireOptionTestimonial = ({
  flex,
  textColor,
  image,
  title,
  position,
  pera,
  name,
  date,
  alt,
}) => (
  <Section className="section" flex={flex}>
    <div className="container">
      <div className="columns">
        <div className="column is-4">
          <figure className="image is-square">
            <img src={image} alt={alt} />
          </figure>
        </div>
        <div className="column is-1" />
        <Wrapper className="column is-7 has-text-centered">
          <div className="container">
            <HireCard
              textBlack={textColor}
              title={title}
              position={position}
              subtitle={pera}
              description={name}
              date={date}
            />
          </div>
        </Wrapper>
      </div>
    </div>
  </Section>
);

export default HireOptionTestimonial;
