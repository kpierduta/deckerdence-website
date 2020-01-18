import React from 'react';

class BlogData extends React.Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <div className="tile is-child box">
        <p className="title has-text-weight-normal has-text-centered">
          {title}
        </p>
        <p className="subtitle is-4 has-text-centered has-text-weight-semibold">
          {subtitle}
        </p>
        <div className="has-text-centered">
          <button className="button is-normal" type="button">
            READ MORE
          </button>
        </div>
      </div>
    );
  }
}

export default BlogData;
