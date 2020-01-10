import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HireOptions from '../components/HireOptions';
import OptionToIncludes from '../components/OptionToIncludes';
import HireForm from '../components/HireForm';

export default class HirePage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <HireOptions hirebgImage="/images/hire/header-photo@2x.png" />
        <OptionToIncludes />
        <HireForm
          para=""
          avatar="/images/hire/icon@2x.png"
          email="Email"
          phone="Phone Number"
          buttonName="DOWNLOAD"
          subtitle="By submitting this form you agree to our contact conditions."
        />
      </Layout>
    );
  }
}
