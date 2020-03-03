import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PartiesHero from '../components/PartiesHero';
import PageHeading from '../components/PageHeading';
import StagesSection from '../components/StagesSection';
import VenueSection from '../components/VenueSection';
import DetailsCardSection from '../components/DetailsCardSection';
import GalleryItem from '../components/GalleryItem';
import ContactForm from '../components/ContactForm';
import Festival from '../components/Festival';
import BlackButton from '../components/elements/BlackButton';

const GalleryWrapper = styled.div`
  margin-top: 4rem;
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
      boldTitle
      normalSubtitle
      simpleStages {
        mainHeading
        item {
          title
          subTitle
          avatar {
            asset {
              url
            }
          }
        }
      }
      simpleStages {
        mainHeading
        item {
          title
          subTitle
          avatar {
            asset {
              url
            }
          }
        }
      }
      firstSectionHasFrameRight
      firstSectionHasTextWhite
      firstSectionTitle
      firstSectionBackgroundImage {
        asset {
          url
        }
      }
      firstSectionBgImageAlt
      firstSectionFrameImage {
        asset {
          url
        }
      }
      festival {
        mainHeading
        subtitle
        item {
          avatar {
            asset {
              url
            }
          }
        }
      }
      secondSectionHasFrameRight
      secondSectionHasTextWhite
      secondSectionTitle
      secondSectionBackgroundImage {
        asset {
          url
        }
      }
      secondSectionBgImageAlt
      secondSectionFrameImage {
        asset {
          url
        }
      }
      detailsMainHeading
      firstCardDescription
      secondCardDescription
      thirdSectionHasFrameRight
      thirdSectionHasTextWhite
      thirdSectionTitle
      thirdSectionBackgroundImage {
        asset {
          url
        }
      }
      thirdSectionBgImageAlt
      thirdSectionFrameImage {
        asset {
          url
        }
      }
      gallery {
        galleryItems {
          blackAndWhiteImage {
            asset {
              url
            }
          }
          coloredImage {
            asset {
              url
            }
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
      <StagesSection data={page} />
      <VenueSection
        flex={page.firstSectionHasFrameRight}
        color={page.firstSectionHasTextWhite}
        frame={page.firstSectionFrameImage.asset.url}
        text={page.firstSectionTitle}
        alt={page.firstSectionBgImageAlt}
        frameBgImage={page.firstSectionBackgroundImage.asset.url}
      />
      <Festival data={page} />
      <VenueSection
        flex={page.secondSectionHasFrameRight}
        color={page.secondSectionHasTextWhite}
        frame={page.secondSectionFrameImage.asset.url}
        text={page.secondSectionTitle}
        alt={page.secondSectionBgImageAlt}
        frameBgImage={page.secondSectionBackgroundImage.asset.url}
      />
      <DetailsCardSection data={page} />
      <VenueSection
        color={page.thirdSectionHasTextWhite}
        flex={page.thirdSectionHasFrameRight}
        frame={page.thirdSectionFrameImage.asset.url}
        text={page.thirdSectionTitle}
        alt={page.thirdSectionBgImageAlt}
        frameBgImage={page.thirdSectionBackgroundImage.asset.url}
      />
      <GalleryWrapper className="columns is-variable is-3 is-multiline">
        {page.gallery.galleryItems.map(items => (
          <GalleryItem
            imageColoured={items.blackAndWhiteImage.asset.url}
            imageBw={items.coloredImage.asset.url}
          />
        ))}
      </GalleryWrapper>
      <BlackButton
        image="/images/view-more-black.png"
        alt="Learn More Button"
        hasWidth="20%"
      />
      <ContactForm />
    </Layout>
  );
};

export default MainPage;
