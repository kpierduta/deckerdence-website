import React from 'react';

import BarTile from './BarTile';

const BarInfo = () => (
  <section className="section">
    <div className="container">
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <BarTile
            title="Marquee information"
            subtitle="The awning marquee structure measures 8m x 6m and is fitted
                directly from the bus covering the window of the bar where the
                serving hatch is. As the awning fits directly to the bus
                between decks, the upstairs view is not spoiled. Suspendisse
                varius ligula in molestie lacinia. Maecenas varius eget ligula
                a sagittis. Pellentesque interdum, nisl nec interdum"
          />
        </div>
        <div className="tile is-6 is-vertical is-parent">
          <BarTile
            title="Upstairs Lounge"
            subtitle="Our beautiful upstairs lounge gives you the perfect setting to enjoy drinks with your guests complimented with a panoramic view of your chosen location."
          />
          <BarTile
            title="Upstairs Lounge"
            subtitle="Our beautiful upstairs lounge gives you the perfect setting to enjoy drinks with your guests complimented with a panoramic view of your chosen location."
          />
        </div>
      </div>
    </div>
  </section>
);

export default BarInfo;
