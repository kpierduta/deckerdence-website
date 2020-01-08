import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HireOptions from '../components/HireOptions';
import OptionToIncludes from '../components/OptionToIncludes';

export default class HirePage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <HireOptions hirebgImage="/images/hire/header-photo@2x.png" />
        <OptionToIncludes />
      </Layout>
    );
  }
}
