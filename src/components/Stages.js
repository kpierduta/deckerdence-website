import React from 'react';

import styled from 'styled-components';

const ImageWrapper = styled.div`
  justify-content: center;
`;
class Stages extends React.Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <section className="column is-4 is-multiline">
        <div className="card-content">
          <div className="card-image">
            <ImageWrapper className="media align">
              <figure className="image is-128x128">
                <img
                  className="is-rounded"
                  src="/images/parties/icon@2x.png"
                  alt=""
                />
              </figure>
            </ImageWrapper>
          </div>
          <div className="card-content">
            <p className="title is-3 has-text-weight-normal is-spaced has-text-centered">
              {title}
            </p>
            <div className="content">
              <p className="subtitle is-4 has-text-weight-normal has-text-centered">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Stages;
