import React from 'react';

const TileItem = ({ data }) => (
  <div className="section">
    <div className="container">
      <div className="tile is-ancestor">
        <div className="tile is-5 is-vertical is-parent">
          {data.information.item.map(items => (
            <div className="tile is-child" key={items._key}>
              <p className="title is-5 has-text-weight-bold is-family-primary">
                {items.title}
              </p>
              <p className="subtitle is-5 is-family-primary">
                {items.subtitle}
              </p>
            </div>
          ))}
        </div>
        <div className="tile is-parent">
          <div className="tile is-child">
            <figure className="image is-5by4">
              <img src={data.information.avatar.asset.url} alt="avatar" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TileItem;
