import React from 'react';
import styled from 'styled-components';

import Title from '../elements/Title';
import Card from '../global/Card';

const Description = styled.p`
  font-size: ${props => props.theme.fontFullLarge};
`;

const OwnerBlock = ({ title, description, owners = [] }) => {
  return (
    <div className="pt-6">
      <Title dark className="has-text-centered">
        {title}
      </Title>
      <Description className="has-text-centered has-text-weight-bold pb-4">
        {description}
      </Description>
      {owners.map(owner => (
        <Card key={owner._id} data={owner} />
      ))}
    </div>
  );
};

export default OwnerBlock;
