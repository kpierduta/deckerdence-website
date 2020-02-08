import React from 'react';

import Stages from './Stages';

import Heading from './elments/Heading';

const StagesSection = () => (
  <section className="section">
    <div className="container">
      <Heading heading="THREE SIMPLE STAGES" />
      <div className="columns is-multiline">
        <Stages
          title="1. Choose your location"
          subtitle="We can bring our unique venue to a location of your choosing, or
              you can host your party at our fully-equipped event space in the
              Coleshill"
          image="/images/parties/icon@2x.png"
          alt="dddddd" // change this as per your image
        />
        <Stages
          title="1. Choose your location"
          subtitle="We can bring our unique venue to a location of your choosing, or
              you can host your party at our fully-equipped event space in
              Coleshill"
          image="/images/parties/icon@2x.png"
        />
        <Stages
          title="1. Choose your location"
          subtitle="We can bring our unique venue to a location of your choosing, or
              you can host your party at our fully-equipped event space in
              Coleshill"
          image="/images/parties/icon@2x.png"
        />
      </div>
    </div>
  </section>
);

export default StagesSection;
