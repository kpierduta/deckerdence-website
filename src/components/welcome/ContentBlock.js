import React from 'react';
import { Link } from 'gatsby';

import { PortableText } from '../elements';

const ContentBlock = ({ description, isDark, targetButton }) => (
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
        {targetButton && (
          <Link
            className="button is-danger mt-5 has-text-weight-bold"
            to={targetButton || '/'}>
            Find Out More
          </Link>
        )}
      </div>
    </div>
  </section>
);

export default ContentBlock;
