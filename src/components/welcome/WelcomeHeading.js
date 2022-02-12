import React from 'react';

import { Title, PortableText } from '../elements';

const WelcomeHeading = ({ title, description, variant }) => (
  <section
    className={`section ${
      !variant ? 'has-background-dark' : 'has-background-danger-darker'
    }`}>
    <div className="container has-text-centered has-text-white">
      <Title>{title}</Title>
      {description && (
        <div className="has-text-white mt-4">
          <PortableText light>{description}</PortableText>
        </div>
      )}
    </div>
  </section>
);

export default WelcomeHeading;
