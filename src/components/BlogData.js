import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .box {
    background-image: url('${props => props.boxImage}');
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

class BlogData extends React.Component {
  render() {
    const { title, subtitle, boxImage } = this.props;
    return (
      <Wrapper boxImage={boxImage}>
        <div className="tile is-child box">
          <p className="title has-text-weight-normal has-text-centered">
            {title}
          </p>
          <p className="subtitle is-4 has-text-centered has-text-weight-semibold">
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
