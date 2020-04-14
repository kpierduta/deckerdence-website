import React from 'react';

import FestivalIcon from './FestivalIcon';

const Festival = ({ data }) => (
  <section className="section">
    <div className="container">
      <h1 className="title is-4 has-text-centered">
        {data.festival.mainHeading}
      </h1>
      <div className="columns is-multiline is-variable is-5">
        {data.festival.item.map(items => (
          <FestivalIcon
            key={items._key}
            image={items.avatar.asset.url}
            alternative="festivals"
          />
        ))}
      </div>
      <h1 className="title is-4 has-text-centered">{data.festival.subtitle}</h1>
    </div>
  </section>
);

export default Festival;
