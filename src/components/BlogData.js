import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .box {
    background-image: url('${props => props.boxImage}');
    background-size: cover;
    background-repeat: no-repeat;
    .text {
        color: ${props => props.color} !important;
    }
  }
`;

class BlogData extends React.Component {
  render() {
    const { title, subtitle, boxImage, color } = this.props;
    return (
      <Wrapper boxImage={boxImage} color={color}>
        <div className="tile is-child box">
          <p className="title has-text-weight-normal has-text-centered text">
            {title}
          </p>
          <p className="subtitle is-4 has-text-centered has-text-weight-semibold text">
            {subtitle}
          </p>
          <div className="has-text-centered">
            <button className="button is-normal" type="button">
              READ MORE
            </button>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default BlogData;
