import React from 'react';
import SanityImage from './global/SanityImage';

const Diagram = ({ avatar, largeImage }) => (
  <section className="section">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-6">
          <figure className={largeImage ? 'image is-3by2' : ''}>
            <SanityImage gatsbyImage={avatar} alt="" />
          </figure>
        </div>
      </div>
    </div>
  </section>
);

export default Diagram;
