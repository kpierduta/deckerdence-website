import React from 'react';
import styled from 'styled-components';
import SanityImage from './global/SanityImage';
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
  .title,
  .subtitle {
    color: ${props => (props.flex ? '#ffff' : '#2c2c2a')} !important;
  }
`;

const Wrapper = styled.div`
  background: ${props =>
    `url(${
      props.flex
        ? '/images/contacts/slider-bg.png'
        : '/images/contacts/blackFrame.png'
    })`};
  background-size: 100% 90%;
  background-repeat: no-repeat;
  background-position: center;
  .container h1:last-child {
    padding: 0 0 3rem;
  }
`;

const HireOptionTestimonial = ({
  flex,
  image,
  title,
  position,
  pera,
  name,
  date,
  alt,
}) => {
  return (
    <Section className="section" flex={flex}>
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <SanityImage fluid={image} className="is-rounded" alt={alt} />
          </div>
          <div className="column is-2 is-desktop" />
          <Wrapper className="column is-6 has-text-centered" flex={flex}>
            <div className="container">
              <HireCard
                textBlack={flex}
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
};

export default HireOptionTestimonial;
