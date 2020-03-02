import React from 'react';
import { graphql } from 'gatsby';

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

export const MainPageQuery = graphql`
  query mainPageData($slug: String) {
    sanityMainPage(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
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
    }
  }
`;

const MainPage = ({ data }) => {
  const page = data.sanityMainPage;
  return (
    <Layout>
      <Seo title="Hospitality" />
      <PartiesHero
        title={page.heroTitle}
        partyBgImage={page.heroBackgroundImage.asset.url}
      />
      <PageHeading subTitle={page.normalSubtitle} />
      <StagesSection data={page} />
      <VenueSection
        flex
        frame="/images/parties/frame@2x.png"
        text="Deckerdence is a superb and unusual venue for your special event."
        alt="main"
        frameBgImage="/images/parties/photo-black-and-white@2x.png"
      />
      <Festival
        title="Our VENUE IS Perfect for..."
        subtitle="...AND can travel anywhere in the UK"
      />
      <VenueSection
        flex
        color
        frame="/images/parties/rightframes.png"
        text="Your guests will be amazed when they walk into the marquee and see a double decker bus inside. "
        alt="main"
        frameBgImage="/images/parties/photo-black-and-white@2x.png"
      />
      <DetailsCardSection />
      <VenueSection
        color
        frame="/images/parties/rightframes.png"
        text="The lower deck of our stunning vintage bus is a traditional bar"
        alt="main"
        frameBgImage="/images/parties/photo-black-and-white@2x.png"
      />
      <GalleryItem />
      <ContactForm />
    </Layout>
  );
};

export default MainPage;
