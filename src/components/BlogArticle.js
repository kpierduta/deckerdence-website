import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  .title {
    color: ${props => props.theme.primaryColor} !important ;
  }
`;

class BlogArticle extends React.Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <Section className="section">
        <div className="container">
          <h1 className="title is-2 is-spaced is-uppercase has-text-centered">
            {title}
          </h1>
          <p className="subtitle is-4 has-text-centered">{subtitle}</p>
        </div>
      </Section>
    );
  }
}

export default BlogArticle;
