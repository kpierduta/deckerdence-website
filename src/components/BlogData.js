import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  
    background-image: url('${props => props.boxImage}');
    background-size: cover;
    background-repeat: no-repeat;
    .text {
        color: ${props => props.color} !important;
    }
`;

class BlogData extends React.Component {
  render() {
    const { title, subtitle, boxImage, color } = this.props;
    return (
      <Wrapper className="tile is-child box" boxImage={boxImage} color={color}>
        <p className="title has-text-weight-normal has-text-centered text">
          {title}
        </p>
        <p className="subtitle is-4 has-text-centered has-text-weight-semibold text">
          {subtitle}
        </p>
        <div className="has-text-centered">
          <button
            className="button is-normal has-text-weight-bold text"
            type="button"
          >
            READ MORE
          </button>
        </div>
      </Wrapper>
    );
  }
}

export default BlogData;
