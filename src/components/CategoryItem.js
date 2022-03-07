import React from 'react';

import styled from 'styled-components';

const Column = styled.div`
  background-image: url('/images/hire/bgframe.png');
  background-size: cover;
  margin: 0 0.5rem;
  min-height: 8rem;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const SideImage = styled.div`
  img {
    height: 7rem;
  }
`;

const CategoryItem = ({ item }) => {
  console.log(item, 'item');
  return (
    <div className="column has-text-centered">
      <div className="columns">
        <Column className="column is-flex">
          <div>
            {item.image && item.image.asset && (
              <figure className="image is-128x128 has-text-centered mx-auto mb-5">
                <img src={item.image.asset.url} alt="vertical-arrow" />
              </figure>
            )}
            <div className="title is-5 is-capatalized has-text-weight-normal has-text-black">
              {item.title}
            </div>
          </div>
        </Column>
        {item.rightImageArrow && (
          <SideImage className="column is-2 is-hidden-mobile my-auto">
            <img src="/images/hire/arrow-vertical.png" alt="vertical-arrow" />
          </SideImage>
        )}
      </div>
    </div>
  );
};

export default CategoryItem;
