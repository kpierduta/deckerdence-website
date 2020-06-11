import React from 'react';
import { graphql } from 'gatsby';

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
      information {
        _key
        columnReverse
        alt
        title
        subtitle
        description
        name
        date(formatString: "DD-MM-YYYY")
        asset {
          url
        }
      }
      arcade {
        _key
        alt
        imageIsHalf
        asset {
          url
        }
      }
      detailsMainHeading
      _rawDetails
      details {
        _key

        content {
          _key
          _type
          style
          list
        }
        finerDetailsImage {
          asset {
            url
          }
        }
      }
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
          url
        }
        alt
      }
      downloadShowcase {
        asset {
          url
        }
      }
    }
  }
`;

const MainPage = ({ data }) => {
  const page = data.sanityMainPage;
  // const [length, setLength] = useState(6);
  // const galleryImages = page.gallery.galleryItems.slice(0, length);
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
      {page.information.map(item => (
        <HireOptionTestimonial
          key={item._key}
          image={item.asset.url}
          flex={item.columnReverse}
          title={item.title}
          position={item.subtitle}
          pera={item.description}
          alt={item.alt}
          name={item.name}
          date={item.date}
        />
      ))}
      <Section className="columns is-multiline">
        {page.arcade.map(item => (
          <div className={item.imageIsHalf ? 'column is-6' : 'column is-12'}>
            <figure
              className={item.imageIsHalf ? 'image is-5by3' : 'image is-2by1'}
            >
              <img src={item.asset.url} alt={item.alt} />
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
          <GalleryItem src={items.asset.url} key={items._key} alt={items.alt} />
        ))}
      </GalleryWrapper>
      <Button type="button">
        <figure className="image-button">
          <img src="/images/view-more-black.png" alt="button" />
        </figure>
      </Button>
      <Contact avatar={page.downloadShowcase.asset.url} />
    </Layout>
  );
};

export default MainPage;
