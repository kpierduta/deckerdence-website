import React from 'react';
import styled from 'styled-components';
import Diagram from './Diagram';
import Input from './elments/Input';

const Section = styled.div``;

class ContactForm extends React.Component {
  render() {
    const {} = this.props;
    return (
      <Section className="is-block is-relative">
        <div className="container">
          <Diagram avatar="/images/hire/icon@2x.png" />
        </div>

        <div className="columns is-centered">
          <div className="column is-6">
            <Input />
            <Input />
            <p className="subtitle is-4 has-text-white">text</p>
            <button type="button" className="button is-light is-medium">
              text
            </button>
          </div>
        </div>
      </Section>
    );
  }
}

export default ContactForm;
