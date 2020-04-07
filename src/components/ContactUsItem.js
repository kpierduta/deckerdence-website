import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .column {
    display: flex;
  }
  .card {
    background-image: url('/images/contacts/fame2x.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 500px;
    box-shadow: none;

    padding: 0rem 2rem;
    @media screen and (max-width: 768px) {
      padding: 0rem 1rem;
    }
  }
  h1 {
    border-bottom: 3px solid white;
    padding: 0rem 0rem 1rem 0rem;
  }

  .content {
    margin: 7rem 0rem 0rem 0rem;
  }
`;
const ImageWrapper = styled.div`
  justify-content: center;
`;

const ContactUsItem = ({ title, icon, para, href }) => (
  <Section className="column">
    <a href={href}>
      <div className="card">
        <div className="card-content">
          <div className="content has-text-centered">
            <h1 className="title is-5 has-text-weight-normal has-text-centered has-text-white">
              {title}
            </h1>
            <ImageWrapper className="media align">
              <figure className="image is-96x96">
                <img src={icon} alt="" />
              </figure>
            </ImageWrapper>
            <p className="subtitle is-5 has-text-centered has-text-white">
              {para}
            </p>
          </div>
        </div>
      </div>
    </a>
  </Section>
);

export default ContactUsItem;
