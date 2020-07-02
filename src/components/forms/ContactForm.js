import React, { useState } from 'react';
import styled from 'styled-components';
import addToMailchimp from 'gatsby-plugin-mailchimp';

const Section = styled.div`
  .subtitle {
    color: ${props => props.theme.lightShades} !important;
  }
  .input {
    border-radius: 0;
    border: 1px solid ${props => props.theme.borderColor};
    display: block;
    margin: 0 0 1.5rem;
    background: transparent;
    outline: ${props =>
      props.dottedBorder ? 'null' : '1px dotted rgba(255, 255, 255, 0.4)'};
    outline-offset: ${props => (props.dottedBorder ? 'null' : '5px')};
    ::placeholder {
      color: ${props => props.theme.lightShades} !important ;
    }
  }
`;

const ContactForm = ({ pera, dottedBorder }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const handleSubmit = e => {
    e.preventDefault();

    addToMailchimp(phone)
      .then(data => {
        alert(data.result);
      })
      .catch(error => {
        console.log('fail', error);
      });

    addToMailchimp(email)
      .then(data => {
        alert(data.result);
      })
      .catch(error => {
        console.log('fail', error);
      });
  };
  const handleEmailChange = event => {
    setEmail(event.currentTarget.value);
  };
  const handlePhoneChange = event => {
    setPhone(event.currentTarget.value);
  };

  return (
    <Section className="section is-paddingless" dottedBorder={dottedBorder}>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <div className="control">
            <input
              name="email"
              className="input is-medium is-family-secondary subtitle is-5 is-uppercase"
              value={email}
              type="email"
              placeholder="EMAIL"
              onChange={handleEmailChange}
            />

            <input
              name="phone"
              className="input is-medium is-family-secondary subtitle is-5 is-uppercase"
              type="tel"
              value={phone}
              placeholder="Phone Number"
              onChange={handlePhoneChange}
            />
          </div>
        </div>
        <p className="subtitle is-5 has-text-centered-touch">{pera}</p>
        <div>
          <button type="submit" className="button is-danger title is-5 ">
            <span className="is-size-5-touch is-uppercase">Download</span>
          </button>
        </div>
      </form>
    </Section>
  );
};

export default ContactForm;
