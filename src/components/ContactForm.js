import React from 'react';
import styled from 'styled-components';
import Diagram from './Diagram';
import Input from './elments/Input';

const Section = styled.div`
  background-image: url('/images/hire/basic@2x.png');
  background-size: cover;
  background-repeat: no-repeat;
`;

class ContactForm extends React.Component {
  render() {
    return (
      <Section className="section is-block is-relative">
        <div className="container">
          <Diagram avatar="/images/hire/icon@2x.png" />
        </div>
        <div className="columns is-centered">
          <div className="column is-6">
            <Input type="email" text="Email" />
            <Input type="text" text="Phone Number" />
            <p className="subtitle is-4 has-text-white has-text-centered">
              By submitting this form you agree to our contact T & C
            </p>
            <div className="has-text-centered">
              <button type="button" className="button is-light is-medium">
                Download
              </button>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default ContactForm;
