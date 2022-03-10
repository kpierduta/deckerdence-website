import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';

const Wrapper = styled.div`
  min-height:20rem;
  background-image: url('${props => props.boxImage}');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  justify-content: space-around;
  display: grid;
  padding: 1rem 3rem;
  .text {
    color: ${props =>
      props.color
        ? props.theme.textColorLite
        : props.theme.backgroundColor} !important;
  }
  .button {
    border: 1px solid ${props => (props.color ? '#000' : '#fff')} !important;
  }
  .has-text-centered {
    align-self: end;
    margin: 0 0 10px;
  }
`;

const BlogData = ({ title, date, boxImage, color, link }) => {
  return (
    <Wrapper className="tile is-child box" boxImage={boxImage} color={color}>
      <p className="title is-4 has-text-weight-semibold has-text-centered text">
        {title}
      </p>
      <p className="subtitle is-4 has-text-centered has-text-weight-semibold text">
        {date}
      </p>
      <div className="has-text-centered">
        <Link
          to={link}
          className="button is-normal title is-4 has-text-weight-normal is-family-secondary text"
          type="button"
        >
          READ MORE
        </Link>
      </div>
    </Wrapper>
  );
};

export default BlogData;
