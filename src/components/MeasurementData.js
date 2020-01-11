import React from 'react';

import Measurement from './Measurement';

class MeasurementData extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            <Measurement
              title="Marquee information"
              subtitle=" The half wrap around marquee measures 25m x 9m and the marquee structure is fitted directly from the bus, between the  decks, to not spoil the upstairs views."
            />
            <Measurement
              title="Marquee information"
              subtitle=" The half wrap around marquee measures 25m x 9m and the marquee structure is fitted directly from the bus, between the  decks, to not spoil the upstairs views."
            />
            <Measurement
              title="Marquee information"
              subtitle=" The half wrap around marquee measures 25m x 9m and the marquee structure is fitted directly from the bus, between the  decks, to not spoil the upstairs views."
            />
            <Measurement
              title="Marquee information"
              subtitle=" The half wrap around marquee measures 25m x 9m and the marquee structure is fitted directly from the bus, between the  decks, to not spoil the upstairs views."
            />
          </div>
        </div>
      </section>
    );
  }
}
export default MeasurementData;
