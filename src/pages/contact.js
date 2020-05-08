import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import ContactUsItem from '../components/ContactUsItem';
import MyMapComponent from '../components/GoogleMap';
import Contact from '../components/Contact';

export const contactUsQuery = graphql`
  query contactUsPage {
    sanitySiteSettings {
      contactUs {
        seoTitle
        seoKeywords
        seoMetaDescription
        mainHeading
        title
        subtitle
        contactItem {
          _key
          genre
          title
          subtitle
          icon {
            asset {
              url
            }
          }
        }
      }
    }
  }
`;

const Section = styled.div`
  background-color: ${props => props.theme.textColorLite};
  .columns {
    background-image: url('/images/contacts/frame@2x.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .is-10 {
    padding: 6.5rem 0rem;
  }
  p {
    margin-top: 2rem;
  }
`;

const Header = styled.div`
  padding-bottom: 3rem;
`;

const ContactUs = ({ data }) => {
  const settings = data.sanitySiteSettings;
  return (
    <Layout>
      <Seo
        title={settings.contactUs.seoTitle}
        keywords={settings.contactUs.seoKeywords}
        description={settings.contactUs.seoMetaDescription}
      />
      <PageHeading title={settings.contactUs.mainHeading} />
      <section className="section">
        <div className="container">
          <Header className="columns is-centered">
            <div className="column is-7">
              <h1 className="title is-4 is-spaced has-text-centered has-text-black">
                {settings.contactUs.title}
              </h1>
              <h1 className="subtitle is-5 has-text-centered has-text-black ">
                {settings.contactUs.subtitle}
              </h1>
            </div>
          </Header>
          <div className="columns">
            {settings.contactUs.contactItem.map(item => (
              <ContactUsItem
                key={item._key}
                title={item.title}
                icon={item.icon.asset.url}
                para={item.subtitle}
                href={`${
                  item.genre === 'phoneNumber'
                    ? 'tel:'
                    : item.genre === 'mail'
                    ? 'mailto:'
                    : ''
                }`}
              />
            ))}
          </div>
        </div>
      </section>
      <Section className="section is-hidden-mobile">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-10">
              <MyMapComponent isMarkerShown />
            </div>
          </div>
        </div>
        <p className="subtitle is-5 has-text-white has-text-centered">
          Visitors by appointment only
        </p>
      </Section>
      <Contact />
    </Layout>
  );
};

export default ContactUs;
