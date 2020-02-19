import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .bg-image {
    background-image: url('/images/contacts/fame2x.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 500px;
    align-content: center;
    display: grid;
    padding: 0rem 2rem;
    @media screen and (max-width: 768px) {
      padding: 0rem 1rem;
    }
  }
  h1 {
    border-bottom: 3px solid white;
    padding: 0rem 0rem 1rem 0rem;
  }
`;
const ImageWrapper = styled.div`
  justify-content: center;
`;

const ContactUsItem = ({ title, icon, para }) => (
  <Section className="column">
    <div className="bg-image">
      <h1 className="title is-3 is-size-4-mobile has-text-weight-normal is-spaced has-text-centered has-text-white">
        {title}
      </h1>
      <ImageWrapper className="media align">
        <figure className="image is-96x96">
          <img src={icon} alt="" />
        </figure>
      </ImageWrapper>
      <div className="content">
        <p className="subtitle is-4 is-size-5-mobile has-text-weight-normal has-text-centered has-text-white">
          {para}
        </p>
      </div>
    </div>
  </Section>
);

export default ContactUsItem;
