import React from 'react';
import styled from 'styled-components';
import ContactUsItem from './ContactUsItem';

const Header = styled.div`
  padding-bottom: 3rem;
`;

const ContactUsData = () => (
  <section className="section">
    <div className="container">
      <Header>
        <h1 className="title is-spaced is-2 is-size-3-mobile has-text-weight-normal has-text-centered has-text-black">
          What to expect when contacting Deckerdence
        </h1>
        <h1 className="subtitle is-4  is-size-5-mobile has-text-weight-normal has-text-centered has-text-black ">
          If you are interested in hiring Deckerdence or would like some further
          information then please...
        </h1>
      </Header>
      <div className="columns">
        <ContactUsItem
          icon="/images/contacts/icon@2x.png"
          title="Chat to us now"
          para="By using a our chat link you will come through directly to
              our team."
        />
        <ContactUsItem
          icon="/images/contacts/icon2.png"
          title="Call us"
          para="01675 463555"
        />
        <ContactUsItem
          icon="/images/contacts/icon3.png"
          title="Email us"
          para="  enquiries@deckerdence.com"
        />
      </div>
    </div>
  </section>
);
export default ContactUsData;
