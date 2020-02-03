import React from 'react';

import styled from 'styled-components';

const Section = styled.div``;

class Gallery extends React.Component {
  render() {
    const {} = this.props;
    return (
      <Section className="section">
        <div className="columns is-varialbe is-5 is-multiline">
          <div className="column is-4">
            <figure className="image is-3by2">
              <img src="/images/gallery/goin.png" alt="gallery" />
            </figure>
          </div>
          <div className="column is-4">
            <figure className="image is-3by2">
              <img src="/images/gallery/goin.png" alt="gallery-one" />
            </figure>
          </div>
          <div className="column is-4">
            <figure className="image is-3by2">
              <img src="/images/gallery/goin.png" alt="gallery-two" />
            </figure>
          </div>
          <div className="column is-4">
            <figure className="image is-3by2">
              <img src="/images/gallery/goin.png" alt="gallery-three" />
            </figure>
          </div>
          <div className="column is-4">
            <figure className="image is-3by2">
              <img src="/images/gallery/goin.png" alt="gallery-four" />
            </figure>
          </div>
          <div className="column is-4">
            <figure className="image is-3by2">
              <img src="/images/gallery/goin.png" alt="gallery-fifth" />
            </figure>
          </div>
        </div>
      </Section>
    );
  }
}

export default Gallery;
