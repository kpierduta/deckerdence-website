import React from 'react';
import { graphql, Link } from 'gatsby';

import Img from 'gatsby-image';

import styled from 'styled-components';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PartiesHero from '../components/PartiesHero';
import PageHeading from '../components/PageHeading';
import HireOptionTestimonial from '../components/HireOptionTestimonial';
import DetailsCardSection from '../components/DetailsCardSection';
import VenueSection from '../components/VenueSection';
import GalleryItem from '../components/GalleryItem';
import Contact from '../components/Contact';

const GalleryWrapper = styled.div`
  margin-top: 4rem;
`;

const Section = styled.div``;

const Button = styled.button`
  width: 100%;
  cursor: pointer;
  figure {
    margin: 0 auto;
    width: 20%;
    padding: 3rem 0rem;
  }
`;

export const MainPageQuery = graphql`
  query mainPageData($slug: String) {
    sanityMainPage(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      seoTitle
      seoKeywords
      seoMetaDescription
      heroTitle
      heroBackgroundImage {
        asset {
          url
        }
      }
      normalSubtitle
      testimonials {
        _id
        columnReverse
        image {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
        title
        description
        name
        date
      }
      arcade {
        _key
        alt
        imageIsHalf
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      detailsMainHeading
      _rawDetails(resolveReferences: { maxDepth: 3 })
      Features {
        items {
          _key
          hasFrameRight
          hasTextWhite
          title
          featuresBackgroundImage {
            asset {
              url
            }
          }
          featuresFrameImage {
            asset {
              url
            }
          }
        }
      }
      gallery {
        _key
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
        alt
      }
      buttonLink {
        current
      }
      downloadShowcase {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

const MainPage = ({ data }) => {
  const page = data.sanityMainPage;
  return (
    <Layout>
      <Seo
        title={page.seoTitle}
        description={page.seoMetaDescription}
        keywords={page.seoKeywords}
      />
      <PartiesHero
        title={page.heroTitle}
        partyBgImage={page.heroBackgroundImage.asset.url}
      />
      <PageHeading subTitle={page.normalSubtitle} />
      {page.testimonials.map(item => (
        <HireOptionTestimonial
          key={item._id}
          image={item.image.asset.fluid}
          flex={item.columnReverse}
          title={item.title}
          pera={item.description}
          alt="Testimonials"
          name={item.name}
          date={item.date}
        />
      ))}
      <Section className="columns is-multiline">
        {page.arcade.map(item => (
          <div
            className={item.imageIsHalf ? 'column is-6' : 'column is-12'}
            key={item._key}>
            <figure className={item.imageIsHalf ? '' : ''}>
              <Img fluid={item.asset.fluid} alt={item.alt} />
            </figure>
          </div>
        ))}
      </Section>
      <DetailsCardSection data={page} />
      {page.Features.items.map(item => (
        <VenueSection
          key={item._key}
          color={item.hasTextWhite}
          flex={item.hasFrameRight}
          text={item.title}
          alt={item.thirdSectionBgImageAlt}
          frameBgImage={item.featuresBackgroundImage.asset.url}
          frame={item.featuresFrameImage.asset.url}
        />
      ))}

      <GalleryWrapper className="columns is-variable is-3 is-multiline">
        {page.gallery.map(items => (
          <GalleryItem
            src={items.asset.fluid.src}
            key={items._key}
            alt={items.alt || ''}
          />
        ))}
      </GalleryWrapper>
      <Link to={page.buttonLink.current}>
        <Button type="button">
          <figure className="image-button">
            <img src="/images/view-more-black.png" alt="button" />
          </figure>
        </Button>
      </Link>
      <Contact avatar={page.downloadShowcase.asset.fluid.src} />
    </Layout>
  );
};

export default MainPage;
