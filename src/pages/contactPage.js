import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';

import ContactUsData from '../components/ContactUsData';

export default class ContactPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <PageHeading title="Contact Us" />
        <ContactUsData />
      </Layout>
    );
  }
}
