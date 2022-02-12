import React from 'react';

import { PortableText } from '../elements';

const ContentBlock = ({ description, isDark }) => (
  <section className="section">
    <div className="container has-text-centered">
      <div
        className={`box is-radiusless ${
          !isDark ? 'has-background-dark' : 'has-background-danger-darker'
        }`}>
        {description && (
          <div className="has-text-white mt-4">
            <PortableText light={!isDark}>{description}</PortableText>
          </div>
        )}
      </div>
    </div>
  </section>
);

export default ContentBlock;
