import React from 'react';
import styled from 'styled-components';
import Diagram from './Diagram';
import Input from './elements/Input';

const Section = styled.div`
  background-image: url('/images/hire/hireFormBg.png');
  background-size: 100% 100% !important;
  background-repeat: no-repeat !important;
`;

const ContactForm = () => (
  <Section className="section is-block is-relative">
    <div className="container">
      <Diagram avatar="/images/hire/icon@2x.png" />
    </div>
    <div className="columns is-centered">
      <div className="column is-6">
        <Input />
      </div>
    </div>
  </Section>
);

export default ContactForm;
