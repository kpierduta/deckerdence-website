import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  background-image: url(${props => props.towbgImage});
  background-size: cover;
  background-repeat: no-repeat;
  .thumbnail {
    position: relative;
    margin-bottom: 0;
    border: 0;
  }

  .caption {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
  }
`;

class PartiesHero extends React.Component {
  render() {
    const { title, partybgImage } = this.props;
    return (
      <Section
        className="section is-block is-medium"
        partybgImage={partybgImage}>
        <div className="columns is-centered is-desktop">
          <div className="column is-7">
            <div id="box-search">
              <div className="thumbnail text-center">
                <img src="/images/parties/text-frame@2x.png" alt="" />
                <div className="caption">
                  <h1 className="title is-1 has-text-centered has-text-white is-size-4-mobile">
                    {title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default PartiesHero;
