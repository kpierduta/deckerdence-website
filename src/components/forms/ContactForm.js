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
    background: ${props => props.theme.backgroundLight};
    outline: ${props =>
      props.dottedBorder ? 'null' : '1px dotted rgba(255, 255, 255, 0.4)'};
    outline-offset: ${props => (props.dottedBorder ? 'null' : '5px')};
    ::placeholder {
      color: ${props => props.theme.lightShades} !important ;
    }
  }
  button {
    color: ${props => props.theme.dangerColor};
    padding: 0 2.5rem;
  }
`;

const ContactForm = ({ dottedBorder, para }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const handleSubmit = e => {
    console.log(email);
    console.log(phone);

    e.preventDefault();

    addToMailchimp(
      email,
      {
        PHONE: phone,
      },
      'https://deckerdence.us15.list-manage.com/subscribe/post?u=8d702165ae74d729d15d53aac&amp;id=8e473db50c',
    )
      .then(data => {
        console.log(data.result);
        alert('Please check your email for your download link');
      })
      .catch(error => {
        console.log(error);
      });

    setEmail('');
    setPhone('');
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
              className="input is-large is-family-secondary"
              value={email}
              type="email"
              placeholder="Your email"
              onChange={handleEmailChange}
            />
            <input
              className="input is-large is-family-secondary"
              name="phone"
              value={phone}
              placeholder="Your phone number"
              onChange={handlePhoneChange}
              type="number"
            />
          </div>
        </div>
        <p className="subtitle is-4">{para}</p>
        <div>
          <button type="submit" className="button title is-5 ">
            <span className="is-size-5-touch is-uppercase">Download</span>
          </button>
        </div>
      </form>
    </Section>
  );
};

export default ContactForm;
