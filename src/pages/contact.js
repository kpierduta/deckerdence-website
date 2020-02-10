import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import ContactUsData from '../components/ContactUsData';
import AddressMap from '../components/AddressMap';

const Contact = () => (
  <Layout>
    <Seo title="Contact Us" />
    <PageHeading title="Contact Us" />
    <ContactUsData />
    <AddressMap />
  </Layout>
);

export default Contact;
