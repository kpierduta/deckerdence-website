import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import ContactUsItem from '../components/ContactUsItem';
import MyMapComponent from '../components/GoogleMap';
import Contact from '../components/Contact';
import DownloadForm from '../components/forms/DownloadForm';

export const contactUsQuery = graphql`
  query contactUsPage {
    sanityContact {
      seoTitle
      seoKeywords
      seoMetaDescription
      mainHeading
      title
      subtitle
      banner {
        asset {
          url
        }
      }
      contactItem {
        href
        title
        icon {
          asset {
            url
          }
        }
        subtitle
      }
      file {
        title
        image {
          asset {
            url
          }
        }
        file {
          asset {
            url
          }
        }
      }
      downloadBrochure {
        asset {
          url
        }
      }
    }
  }
`;

const Section = styled.div`
  background-color: ${props => props.theme.textColorLite};
  .column.is-6 {
    background-image: url('/images/contacts/frame@2x.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  p {
    margin-top: 2rem;
  }
  .my {
    padding: 55px 0px 38px 0px;
  }

  img {
    height: 20rem;
  }
`;

const Header = styled.div`
  padding-bottom: 3rem;
`;

const ContactWrapper = styled.div`
  background-image: url(/images/contacts/downloadBack.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  figure {
    margin: 7px auto !important;
    margin-bottom: 2rem;
  }
`;

const ContactUs = ({ data }) => {
  const settings = data.sanityContact;
  return (
    <Layout>
      <Seo
        title={settings.seoTitle}
        keywords={settings.seoKeywords}
        description={settings.seoMetaDescription}
      />
      <PageHeading title={settings.mainHeading} />
      <section className="section">
        <div className="container">
          <Header className="columns is-centered">
            <div className="column is-7">
              <h1 className="title is-4 is-spaced has-text-centered has-text-black">
                {settings.title}
              </h1>
              <h1 className="subtitle is-5 has-text-centered has-text-black ">
                {settings.subtitle}
              </h1>
            </div>
          </Header>
          <div className="columns">
            {settings.contactItem.map(item => (
              <ContactUsItem
                key={item._key}
                title={item.title}
                icon={item.icon.asset.url}
                para={item.subtitle}
                href={item.href}
              />
            ))}
          </div>
        </div>
      </section>
      <Section className="section is-hidden-mobile">
        <div className="container">
          <div className="columns is-vcentered is-variable is-8">
            <div className="column is-6">
              <div className="my">
                <MyMapComponent isMarkerShown />
              </div>
            </div>

            <div className="column is-6">
              <div className="my">
                <figure className="image">
                  <img src={settings.banner.asset.url} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <p className="subtitle is-5 has-text-white has-text-centered">
          Visitors by appointment only
        </p>
      </Section>
      <Contact avatar={settings.downloadBrochure.asset.url} />
      <ContactWrapper className="section hero is-medium">
        <div className="container">
          <div className="columns is-multiline">
            {settings.file.map(item => (
              <div className="column is-3 has-text-centered">
                <figure className="image is-128x128">
                  <img src={item.image.asset.url} alt="" />
                </figure>
                <DownloadForm title={item.title} file={item.file.asset.url} />
              </div>
            ))}
          </div>
        </div>
      </ContactWrapper>
    </Layout>
  );
};

export default ContactUs;
