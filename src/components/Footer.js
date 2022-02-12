import React from 'react';
import { Link } from 'gatsby';

import SocialIcons from './global/SocialIcons';

const FooterOption = ({ title, link }) => (
  <Link className="title is-5 is-uppercase" to={link || '/'}>
    <h4 className="title is-5 is-uppercase pb-5">{title}</h4>
  </Link>
);

const data1 = [
  { id: 1, title: 'Additional services' },
  { id: 2, title: 'Journal (blog)' },
  { id: 3, title: 'Testimonials' },
  { id: 4, title: 'Contact' },
];
const data2 = [
  { id: 1, title: 'Wedding' },
  { id: 2, title: 'Parties' },
  { id: 3, title: 'Events' },
  { id: 4, title: 'Hospitality' },
];

const Footer = () => (
  <section className="section">
    <div className="container">
      <div className="columns is-variable is-6">
        <div className="column is-3 has-text-centered-mobile">
          {data1.map(item => (
            <FooterOption key={item.id} title={item.title} />
          ))}
        </div>
        <div className="column is-6 is-flex is-justify-content-center is-align-items-end">
          <SocialIcons />
        </div>
        <div className="column is-3 has-text-right has-text-centered-mobile">
          {data2.map(item => (
            <FooterOption key={item.id} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
