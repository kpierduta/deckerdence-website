import React from 'react';
import styled from 'styled-components';
import Diagram from './Diagram';
import ContactForm from './ContactForm';

const Section = styled.div`
  background-image: url('/images/hire/hireFormBg.png');
  background-size: 100% 100% !important;
  background-repeat: no-repeat !important;
`;

const Contact = () => (
  <Section className="section is-block is-relative">
    <div className="container">
      <Diagram avatar="/images/hire/icon@2x.png" />
    </div>
    <div className="columns is-centered">
      <div className="column is-6">
        <ContactForm />
      </div>
    </div>
  </Section>
);

export default Contact;
