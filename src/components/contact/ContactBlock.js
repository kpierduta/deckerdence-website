import React from 'react';
import styled from 'styled-components';

import SanityImage from '../global/SanityImage';
import ContactForm from '../forms/ContactForm';

const Section = styled.div`
  background-color: ${props => props.theme.dangerColor};
  img {
    width: 300px;
    padding-bottom: 2rem;
  }
`;

const ContactBlock = ({ image }) => (
  <Section className="section ">
    <div className="container has-text-centered">
      {image && image.asset && (
        <SanityImage
          fluid={image.asset.id}
          alt="deckerdence contact information"
        />
      )}
    </div>
    <div className="columns is-centered">
      <div className="column is-6">
        <ContactForm image={image} />
      </div>
    </div>
  </Section>
);

export default ContactBlock;
