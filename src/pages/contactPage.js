import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import ContactUsData from '../components/ContactUsData';
import Address from '../components/Address';

const ContactPage = () => (
  <Layout>
    <Seo title="Contact Page" />
    <PageHeading title="Contact Us" />
    <ContactUsData />
    <Address />
  </Layout>
);

export default ContactPage;
