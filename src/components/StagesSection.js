import React from 'react';

import Stages from './Stages';

import Heading from './elments/Heading';

class StagesSection extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <section className="section">
        <div className="container">
          <Heading title={title} />
          <div className="columns is-multiline">
            <Stages
              title="1. Choose your location"
              subtitle="We can bring our unique venue to a location of your choosing, or
              you can host your party at our fully-equipped event space in the
              Coleshill"
            />
            <Stages
              title="1. Choose your location"
              subtitle="We can bring our unique venue to a location of your choosing, or
              you can host your party at our fully-equipped event space in
              Coleshill"
            />
            <Stages
              title="1. Choose your location"
              subtitle="We can bring our unique venue to a location of your choosing, or
              you can host your party at our fully-equipped event space in
              Coleshill"
            />
          </div>
        </div>
      </section>
    );
  }
}
export default StagesSection;
