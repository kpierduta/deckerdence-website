import React from 'react';
import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

const Section = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props => props.theme.primaryColor} !important ;
    font-size: 22px !important;
    text-align: center;
    margin-bottom: 2rem !important;
    text-transform: uppercase !important;
    font-weight: 600 !important;
  }
  a {
    color: ${props => props.theme.darkAccent} !important ;
  }
  strong {
    font-weight: 600 !important;
  }
  p {
    margin-bottom: 1.3rem !important;
    text-align: center !important;
  }
  li {
    text-align: center !important;
    margin-bottom: 0.5rem !important;
  }
  iframe {
    display: block !important;
    margin: 0 auto;
    height: 20rem !important;
  }
`;

const serializers = {
  types: {
    youtube: ({ node }) => {
      const { url } = node;
      const id = getYouTubeId(url);
      return <YouTube videoId={id} />;
    },
  },
};

const BlogArticleItem = ({ data }) => {
  return (
    <Section className="section">
      <div className="container">
        <BlockContent blocks={data.portableText} serializers={serializers} />
      </div>
    </Section>
  );
};

export default BlogArticleItem;
