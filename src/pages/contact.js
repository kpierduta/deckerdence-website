import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import ContactUsItem from '../components/ContactUsItem';
import MyMapComponent from '../components/GoogleMap';
import ContactTestimonial from '../components/ContactTestimonial';

const Section = styled.div`
  background-color: ${props => props.theme.textColorLite};
  .columns {
    background-image: url('/images/contacts/frame@2x.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .is-10 {
    padding: 6.5rem 0rem;
  }
  p {
    margin-top: 2rem;
  }
`;

const Header = styled.div`
  padding-bottom: 3rem;
`;

const Contact = () => (
  <Layout>
    <Seo title="Contact Us" />
    <PageHeading title="Contact Us" />
    <section className="section">
      <div className="container">
        <Header>
          <h1 className="title is-spaced is-2 is-size-3-mobile has-text-weight-normal has-text-centered has-text-black">
            What to expect when contacting Deckerdence
          </h1>
          <h1 className="subtitle is-4  is-size-5-mobile has-text-weight-normal has-text-centered has-text-black ">
            If you are interested in hiring Deckerdence or would like some
            further information then please...
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
    <Section className="section is-hidden-mobile">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-10">
            <MyMapComponent isMarkerShown />
          </div>
        </div>
      </div>
      <p className="has-text-white has-text-centered is-size-3">
        Visitors by appointment only
      </p>
    </Section>
    <ContactTestimonial />
  </Layout>
);

export default Contact;
