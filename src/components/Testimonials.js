import React from 'react';

const Testimonials = props => {
  const { image } = props;

  return (
    <section className="column is-4">
      <div className="card">
        <div className="card-image">
          <figure className="image is-square">
            <img src={image} alt="images" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
