import React from 'react';

import BarTile from './BarTile';

class BlogTile extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="tile is-ancestor">
          <div className="tile is-3 is-parent">
            <BarTile
              title="Marquee information"
              subtitle="The awning marquee structure measures 8m x 6m and is fitted
                directly from the bus covering the window of"
            />
          </div>
          <div className="tile is-parent is-3">
            <BarTile
              title="Marquee information"
              subtitle="The awning marquee structure measures 8m x 6m and is fitted
                directly from the bus covering the window of"
            />
          </div>
          <div className="tile is-parent is-6">
            <BarTile
              title="Marquee information"
              subtitle="The awning marquee structure measures 8m x 6m and is fitted
                directly from the bus covering the window of"
            />
          </div>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-6 is-parent">
            <BarTile
              title="Marquee information"
              subtitle="The awning marquee structure measures 8m x 6m and is fitted
                directly from the bus covering the window of"
            />
          </div>
          <div className="tile is-parent is-3">
            <BarTile
              title="Marquee information"
              subtitle="The awning marquee structure measures 8m x 6m and is fitted
                directly from the bus covering the window of"
            />
          </div>
          <div className="tile is-parent is-3">
            <BarTile
              title="Marquee information"
              subtitle="The awning marquee structure measures 8m x 6m and is fitted
                directly from the bus covering the window of"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default BlogTile;
