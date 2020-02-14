import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import ContactUsData from '../components/ContactUsData';
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

const Contact = () => (
  <Layout>
    <Seo title="Contact Us" />
    <PageHeading title="Contact Us" />
    <ContactUsData />
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
