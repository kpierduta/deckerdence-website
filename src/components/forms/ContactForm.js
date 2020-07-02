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

const ContactForm = ({ dottedBorder, pera }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const handleSubmit = e => {
    console.log(email);
    console.log(phone);

    e.preventDefault();

    addToMailchimp(email, {
      PHONE: phone,
    })
      .then(data => {
        console.log(data.result);
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
              className="input is-medium is-family-secondary subtitle is-5 "
              value={email}
              type="email"
              placeholder="Your email"
              onChange={handleEmailChange}
            />
            <input
              className="input is-medium is-family-secondary subtitle is-5"
              name="phone"
              value={phone}
              placeholder="Your phone number"
              onChange={handlePhoneChange}
              type="number"
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
