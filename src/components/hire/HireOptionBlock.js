import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Stages from '../Stages';

const query = graphql`
  query hireOptionQuery {
    allSanityVehicleHirePage {
      nodes {
        _id
        slug {
          current
        }
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

const HireOptionBlock = () => {
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
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HireOptionBlock;
