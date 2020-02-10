import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HireHero from '../components/HireHero';
import HireOptionItem from '../components/HireOptionItem';

export default class HirePage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <HireHero
          title="Unique Mobile Venue"
          subtitle=" Find the perfect Deckerdence Hire option for your event"
          para="  Deckerdence is a unique mobile venue that is available to hire in
          4 different options. All these options are fully customizable so
          that you can create the perfect setup for your event."
        />
        <HireOptionItem
          image="/images/hire/bus.png"
          option="Hire Option 1"
          title="Vintage Bus Bar"
          description="You can hire our fabulous vintage bus bar
          to give your event a stand out bar."
          price="£500.00"
        />
        <HireOptionItem
          flex
          image="/images/hire/bus-house.png"
          option="Hire Option 2"
          title="Vintage Bus Bar"
          description="You can hire our fabulous vintage bus bar
          to give your event a stand out bar."
          price="£500.00"
        />
        <HireOptionItem
          image="/images/hire/bar-bus.png"
          option="Hire Option 3"
          title="Vintage Bus Bar"
          description="You can hire our fabulous vintage bus bar
          to give your event a stand out bar."
          price="£500.00"
        />
        <HireOptionItem
          flex
          image="/images/hire/bus-decoration.png"
          option="Hire Option 4"
          title="Vintage Bus Bar"
          description="You can hire our fabulous vintage bus bar
          to give your event a stand out bar."
          price="£500.00"
        />
      </Layout>
    );
  }
}
