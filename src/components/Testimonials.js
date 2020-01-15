import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  .card {
    background-image: url(${props => props.bgImage});
    background-size: cover;
    background-repeat: no-repeat;
    max-height: 24rem;
    :before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
    }
  }
  .title {
    position: relative;
  }
`;
const ImageWrapper = styled.div`
  justify-content: center;
  img {
    width: 50%;
  }
`;

class Testimonials extends React.Component {
  render() {
    const { bgImage, title } = this.props;
    return (
      <Section className="column is-4" bgImage={bgImage}>
        <div className="card section hero is-medium">
          <div className="card-content">
            <h1 className="title is-2 has-text-white has-text-centered">
              {title}
            </h1>
            <ImageWrapper className="media align">
              <img
                className=""
                src="/images/gallery/decorative-line@2x.png"
                alt=""
              />
            </ImageWrapper>
          </div>
        </div>
      </Section>
    );
  }
}

export default Testimonials;
