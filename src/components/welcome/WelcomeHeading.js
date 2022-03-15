import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { Title, PortableText } from '../elements';

const Heading = styled(Title)`
  font-size: ${props => props.theme.fontSize2xl} !important;
`;

const SubHeading = styled(PortableText)`
  font-size: ${props => props.theme.fontFullLarge} !important;
`;

const WelcomeHeading = ({ title, description, variant, linkTo }) => (
  <section
    className={`section ${
      !variant ? 'has-background-dark' : 'has-background-danger-darker'
    }`}>
    <Link to={`${linkTo || '#'}`}>
      <div className="container has-text-centered has-text-white">
        <Heading>{title}</Heading>
        {description && (
          <div className="has-text-white mt-4">
            <SubHeading light>{description}</SubHeading>
          </div>
        )}
      </div>
    </Link>
  </section>
);

export default WelcomeHeading;
