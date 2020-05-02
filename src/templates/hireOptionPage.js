import React from 'react';

import { graphql } from 'gatsby';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HireHero from '../components/HireHero';
import TileItem from '../components/TileItem';
import BlogCategoryItem from '../components/BlogCategoryItem';
import VenueSection from '../components/VenueSection';
import Contact from '../components/Contact';
import FestivalIcon from '../components/FestivalIcon';

export const hireOptionPage = graphql`
  query hireOption($slug: String) {
    sanityVehicleHirePage(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      seoTitle
      seoKeywords
      seoMetaDescription
      hireHeroBackgroundImage {
        asset {
          url
        }
      }
      hireHeroOption
      hireHeroTitle
      hireHeroSubtitle
      vehicleFeatures {
        options {
          _key
          sideImage
          category
        }
      }
      hireFormTitle
      firstVehicleFeature {
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

      festival {
        mainHeading
        subtitle
        item {
          _key
          title
          avatar {
            asset {
              url
            }
          }
        }
      }
      secondVehicleFeature {
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
      thirdVehicleFeature {
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
    }
  }
`;

const HireOptionPage = ({ data }) => {
  const hire = data.sanityVehicleHirePage;
  return (
    <Layout>
      <Seo
        title={hire.seoTitle}
        description={hire.seoMetaDescription}
        keywords={hire.seoKeywords}
      />
      <HireHero
        Option={hire.hireHeroOption}
        title={hire.hireHeroTitle}
        subtitle={hire.hireHeroSubtitle}
        bgImage={hire.hireHeroBackgroundImage.asset.url}
      />
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {hire.vehicleFeatures.options.map(options => (
              <BlogCategoryItem
                key={options._key}
                category={options.category}
                sideImage={options.sideImage}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container is-medium">
          <div className="columns is-centered is-desktop">
            <div className="column is-10">
              <header className="Header has-text-centered">
                <p className="subtitle is-5 para has-text-black">
                  {hire.hireFormTitle}
                </p>
              </header>
            </div>
          </div>
        </div>
      </section>
      {hire.firstVehicleFeature.items.map(item => (
        <VenueSection
          key={item._key}
          flex={item.hasFrameRight}
          color={item.hasTextWhite}
          text={item.title}
          frameBgImage={item.featuresBackgroundImage.asset.url}
          frame={item.featuresFrameImage.asset.url}
        />
      ))}

      <section className="section">
        <div className="container">
          <h1 className="title is-4 has-text-centered is-uppercase">
            {hire.festival.mainHeading}
          </h1>
          <div className="columns is-multiline is-variable is-5">
            {hire.festival.item.map(items => (
              <FestivalIcon
                key={items._key}
                image={items.avatar.asset.url}
                alternative="festivals"
              />
            ))}
          </div>
          <h1 className="title is-4 has-text-centered is-uppercase">
            {hire.festival.subtitle}
          </h1>
        </div>
      </section>
      {/* {hire.information.item.map(items => (
        <TileItem
          title={items.title}
          subtitle={items.subtitle}
          key={items._key}
        />
      ))} */}
      {hire.secondVehicleFeature.items.map(item => (
        <VenueSection
          key={item._key}
          flex={item.hasFrameRight}
          color={item.hasTextWhite}
          text={item.title}
          frameBgImage={item.featuresBackgroundImage.asset.url}
          frame={item.featuresFrameImage.asset.url}
        />
      ))}
      <TileItem />
      {hire.thirdVehicleFeature.items.map(item => (
        <VenueSection
          key={item._key}
          flex={item.hasFrameRight}
          color={item.hasTextWhite}
          text={item.title}
          frameBgImage={item.featuresBackgroundImage.asset.url}
          frame={item.featuresFrameImage.asset.url}
        />
      ))}
      <Contact />
    </Layout>
  );
};

export default HireOptionPage;
