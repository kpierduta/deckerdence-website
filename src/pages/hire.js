import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HireOptionItem from '../components/HireOptionItem';

const Section = styled.section`
  background-image: url('/images/hire/background.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .column {
    background-image: url('/images/hire/frame.png');
    background-repeat: no-repeat;
    background-position: cover;
    background-size: 100% 100%;
    padding: 5rem;
    justify-content: space-between;
  }
  .title.is-1 {
    font-size: 4rem;
  }
`;

export default class HirePage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <Section className="hero is-medium">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered">
                <div className="column is-9 has-text-centered">
                  <h1 className="title is-2 has-text-white has-text-weight-normal">
                    Unique Mobile Venue
                  </h1>
                  <h1 className="title is-1 has-text-white has-text-weight-semibold	">
                    Find the perfect Deckerdence Hire option for your event
                  </h1>
                  <img src="/images/hire/decorative-line.png" alt="" />
                  <h1 className="subtitle is-3 has-text-white">
                    Deckerdence is a unique mobile venue that is available to
                    hire in 4 different options. All these options are fully
                    customizable so that you can create the perfect setup for
                    your event.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </Section>
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
