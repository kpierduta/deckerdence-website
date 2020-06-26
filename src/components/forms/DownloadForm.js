import React, { useState } from 'react';
import styled from 'styled-components';
import addToMailchimp from 'gatsby-plugin-mailchimp';

const Section = styled.div`
  .subtitle {
    color: ${props => props.theme.darkShades} !important;
  }

  h1 {
    line-height: 20px !important;
    height: 30px;
  }
  .input {
    border-radius: 0;
    border: 1px solid ${props => props.theme.darkShades};
    display: block;
    margin: 0 0 1.5rem;
    background: transparent;
    outline: ${props => (props.dottedBorder ? 'null' : '1px dotted #2c2c2a')};
    outline-offset: ${props => (props.dottedBorder ? 'null' : '5px')};
    ::placeholder {
      color: ${props => props.theme.darkShades} !important ;
    }
  }
`;

const ContactForm = ({ file, dottedBorder, title }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const handleSubmit = e => {
    e.preventDefault();

    addToMailchimp(email, phone)
      .then(data => {
        alert(data.result);
      })
      .catch(error => {
        console.log('fail', error);
      });
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };
  const handlePhoneChange = event => {
    setPhone(event.target.value);
  };

  return (
    <Section className="section is-paddingless" dottedBorder={dottedBorder}>
      <form onSubmit={handleSubmit}>
        <h1 className="title is-5 has-text-centered-touch">{title}</h1>
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
          </div>
        </div>
        <div className="field">
          <div className="control" htmlFor="mce-PHONE">
            <input
              className="input is-medium is-family-secondary subtitle is-5"
              value={phone}
              placeholder="Your phone number"
              onChange={handlePhoneChange}
              type="text"
              name="PHONE"
              id="mce-PHONE"
            />
          </div>
        </div>
        <p className="subtitle is-6 has-text-centered-touch">
          By submitting this form you agree to our contact terms and conditions.
        </p>
        <div>
          {/* <a
            href="path_to_file"
            className="button is-danger title is-5 "
            type="submit"
            download="proposed_file_name"
            download="pdf"
          >
            Download
          </a> */}
          <button className="button is-danger title is-5 " type="submit">
            <span className="is-size-5-touch is-uppercase">Download</span>
          </button>
        </div>
      </form>
    </Section>
  );
};

export default ContactForm;
