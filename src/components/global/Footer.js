import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';

import SocialIcons from './SocialIcons';

const Section = styled.div`
  h4 {
    font-size: ${props => props.theme.fontSizeExtraLarge};
    font-weight: 400;
  }
`;

const query = graphql`
  query footerQuery {
    sanityFooter {
      _id
      footer {
        _key
        heading
        footerOption {
          _key
          linkTo
          label
        }
      }
    }
  }
`;

const Footer = () => {
  const { sanityFooter: data } = useStaticQuery(query);

  return (
    <Section className="section">
      <div className="container">
        <div className="columns is-variable is-6 ">
          {data.footer.map(item => {
            if (!item) return null;
            return (
              <>
                {item.footerOption.length > 1 ? (
                  <div
                    className={`column is-3 has-text-centered-mobile ${item.heading ===
                      'Third column' && 'has-text-right'}`}
                    key={item._id}>
                    {item.footerOption.map(el => {
                      return (
                        <Link to={el.linkTo || '/'} key={el.label}>
                          <h4 className="title is-uppercase pb-5">
                            {el.label}
                          </h4>
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <div className="column is-6 is-flex is-justify-content-center is-align-items-end">
                    <SocialIcons />
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
export default Footer;
