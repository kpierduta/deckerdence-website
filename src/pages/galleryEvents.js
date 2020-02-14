import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import GalleryImageItem from '../components/GalleryImageItem';

const Container = styled.div`
  padding: 4rem;
  img {
    height: 45px;
    margin: 0rem 3rem;
  }
`;

const GalleryEvents = () => (
  <Layout>
    <Seo title="Home" description="Welcome to GatsbyJs v1" />
    <PageHeading title="GALLERY" />
    <Container className="column has-text-centered">
      <img src="/images/gallery/decoration-left.png" alt="" />
      <div className="is-inline-block">
        <h3 className="title is-1 has-text-black">EVENTS</h3>
      </div>
      <img src="/images/gallery/decoration-right.png" alt="" />
    </Container>
    <div className="columns is-multiline">
      <GalleryImageItem />
      <GalleryImageItem />
      <GalleryImageItem />
    </div>
  </Layout>
);

export default GalleryEvents;
