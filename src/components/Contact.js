import React from 'react';
import styled from 'styled-components';
import ContactForm from './forms/ContactForm';

const Section = styled.div`
  background-color: ${props => props.theme.dangerColor};
  img {
    width: 300px;
    padding-bottom: 2rem;
  }
`;

const Contact = () => (
  <Section className="section ">
    <div className="container has-text-centered">
      <img src="/images/new/contact.png" className="is-rounded" alt="" />
    </div>
    <div className="columns is-centered">
      <div className="column is-6">
        <ContactForm />
      </div>
    </div>
  </Section>
);

export default Contact;
