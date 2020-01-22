import React from 'react';

import BarTile from './BarTile';

class MeasurementData extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="tile is-ancestor">
            <div className="tile is-6 is-vertical is-parent">
              <BarTile
                title="Marquee information"
                subtitle="The half wrap around marquee measures 25m x 9m and the marquee structure is fitted directly from the bus, between the
                2 decks, to not spoil the upstairs views."
              />
              <BarTile
                title="Marquee information"
                subtitle="The half wrap around marquee measures 25m x 9m and the marquee structure is fitted directly from the bus, between the
                2 decks, to not spoil the upstairs views."
              />
            </div>
            <div className="tile is-6 is-vertical is-parent">
              <BarTile
                title="Marquee information"
                subtitle="The half wrap around marquee measures 25m x 9m and the marquee structure is fitted directly from the bus, between the
                2 decks, to not spoil the upstairs views."
              />
              <BarTile
                title="Marquee information"
                subtitle="The half wrap around marquee measures 25m x 9m and the marquee structure is fitted directly from the bus, between the
                2 decks, to not spoil the upstairs views."
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MeasurementData;
