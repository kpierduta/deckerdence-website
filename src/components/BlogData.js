import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: url('${props => props.boxImage}');
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: space-around;
  display: grid;
  padding: 1rem 3rem;
  .text {
    line-height: 1.3;
    color: ${props =>
      props.color
        ? props.theme.textColorLite
        : props.theme.backgroundColor} !important;
  }
  button {
    border: 1px solid ${props => (props.color ? '#000' : '#fff')} !important;
  }
  .has-text-centered {
    align-self: end;
  }
`;

const BlogData = ({ title, date, boxImage, color, link }) => (
  <Wrapper className="tile is-child box" boxImage={boxImage} color={color}>
    <p className="title is-5 has-text-weight-semibold has-text-centered text">
      {title}
    </p>
    <p className="subtitle is-5 has-text-centered has-text-weight-semibold text">
      {date}
    </p>
    <div className="has-text-centered">
      <Link
        to={link}
        className="button is-normal has-text-weight-semibold text"
        type="button"
      >
        READ MORE
      </Link>
    </div>
  </Wrapper>
);

export default BlogData;
