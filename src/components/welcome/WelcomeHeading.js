import React from 'react';

import { Title, PortableText } from '../elements';

const WelcomeHeading = ({ title, description }) => (
  <section className="section has-background-dark">
    <div className="container has-text-centered has-text-white">
      <Title>{title}</Title>
      {description && (
        <div className="has-text-white mt-4">
          <PortableText className="has-text-white mt-4">
            {description}
          </PortableText>
        </div>
      )}
    </div>
  </section>
);

export default WelcomeHeading;
