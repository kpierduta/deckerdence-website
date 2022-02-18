import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Stages from '../Stages';
import { PortableText } from '../elements';

const query = graphql`
  query hireOptionQuery {
    allSanityVehicleHirePage {
      nodes {
        _id
        slug {
          current
        }
        hireOptionPrice
        hireOptionTitle
        hireOptionSubtitle
        hireOptionDescription
        hireOptionColoredImage {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

const HireOptionBlock = ({ description, linkTo }) => {
  const { allSanityVehicleHirePage: hireData } = useStaticQuery(query);
  const data = hireData.nodes;

  return (
    <div className="section has-background-lightAccent">
      <div className="container">
        <div className="columns">
          {data.map(item => {
            if (!item) return null;
            return (
              <Stages
                key={item._key}
                title={item.hireOptionTitle}
                subtitle={item.hireOptionDescription}
                image={item.hireOptionColoredImage.asset.gatsbyImageData}
                to={item.slug.current}
                price={item.hireOptionPrice}
              />
            );
          })}
        </div>
        <div className="has-text-centered">
          {description && (
            <div className="has-text-white mt-4">
              <PortableText>{description}</PortableText>
            </div>
          )}
          {linkTo && (
            <Link
              className="button is-danger mt-5 has-text-weight-bold"
              to={linkTo}
            >
              Find Out More
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HireOptionBlock;
