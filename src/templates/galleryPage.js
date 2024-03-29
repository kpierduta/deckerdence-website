import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import PageTitle from '../components/elements/PageTitle';
import Testimonials from '../components/Testimonials';
// import BlackButton from '../components/elements/BlackButton';

export const GalleryPage = graphql`
  query galleryQuery($slug: String) {
    sanityGalleryPage(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      seoTitle
      seoKeywords
      seoMetaDescription
      mainHeading
      galleryTitle
      galleryImages {
        galleryImage {
          _key
          title
          alternative
          image {
            asset {
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;

const galleryPage = ({ data }) => {
  const page = data.sanityGalleryPage;

  return (
    <Layout>
      <Seo
        title={page.seoTitle}
        description={page.seoMetaDescription}
        keywords={page.seoKeywords}
      />
      <PageHeading title={page.mainHeading} />
      <PageTitle title={page.galleryTitle} />
      <div className="columns is-multiline">
        {page.galleryImages.galleryImage.map(items => (
          <Testimonials
            key={items._key}
            src={items.image.asset.fluid}
            title={items.title}
            alt={items.alternative}
          />
        ))}
      </div>
      {/* <BlackButton
        image="/images/parties/view-more@2x.png"
        alt="Learn More Button"
        haswidth="20%"
      /> */}
    </Layout>
  );
};

export default galleryPage;
