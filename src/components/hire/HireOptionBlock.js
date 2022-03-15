import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Stages from '../Stages';
import { PortableText } from '../elements';
import ButtonGlobal from '../elements/ButtonGlobal';

const query = graphql`
  query hireOptionQuery {
    allSanityVehicleHirePage(sort: { fields: [order] }) {
      nodes {
        _id
        slug {
          current
        }
        order
        mostPopular
        guests
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
                mostPopular={item.mostPopular}
                key={item._id}
                guests={item.guests}
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
          <div className="pt-6">
            {linkTo && <ButtonGlobal title="Find Out More" to={linkTo} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireOptionBlock;
