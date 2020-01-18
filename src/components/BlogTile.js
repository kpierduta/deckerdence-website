import React from 'react';

import BlogData from './BlogData';

class BlogTile extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="tile is-ancestor">
          <div className="tile is-3 is-parent">
            <BlogData
              title="Top 5 reasons to choose deckerdence for your venue"
              subtitle="00/00/00"
            />
          </div>
          <div className="tile is-parent is-3">
            <BlogData
              title="Top 5 reasons to choose deckerdence for your venue"
              subtitle="00/00/00"
            />
          </div>
          <div className="tile is-parent is-6">
            <BlogData
              title="Top 5 reasons to choose deckerdence for your venue"
              subtitle="00/00/00"
            />
          </div>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-6 is-parent">
            <BlogData
              title="Top 5 reasons to choose deckerdence for your venue"
              subtitle="00/00/00"
            />
          </div>
          <div className="tile is-parent is-3">
            <BlogData
              title="Top 5 reasons to choose deckerdence for your venue"
              subtitle="00/00/00"
            />
          </div>
          <div className="tile is-parent is-3">
            <BlogData
              title="Top 5 reasons to choose deckerdence for your venue"
              subtitle="00/00/00"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default BlogTile;
