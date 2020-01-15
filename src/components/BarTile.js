import React from 'react';

class BarTile extends React.Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <div className="tile is-child box">
        <p className="title has-text-weight-normal">{title}</p>
        <p className="subtitle is-4">{subtitle}</p>
      </div>
    );
  }
}

export default BarTile;
