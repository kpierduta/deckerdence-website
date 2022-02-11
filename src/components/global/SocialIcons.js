import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query socialUrlQuery {
    sanitySiteSettings {
      twitter
      instagram
      pinterest
      youtube
      linkedin
      facebook
    }
  }
`;

const socialNetworks = ({
  twitter,
  facebook,
  instagram,
  youtube,
  linkedin,
  pinterest,
}) => {
  const items = [];
  if (twitter) {
    items.push({
      id: 1,
      name: 'twitter',
      icon: '/images/icon/twitter.png',
      link: twitter,
    });
  }
  if (facebook) {
    items.push({
      id: 2,
      name: 'facebook',
      icon: '/images/icon/facebook.png',
      link: facebook,
    });
  }
  if (instagram) {
    items.push({
      id: 3,
      name: 'instagram',
      icon: '/images/icon/instagram.png',
      link: instagram,
    });
  }
  if (youtube) {
    items.push({
      id: 4,
      name: 'youtube',
      icon: '/images/icon/youtube.png',
      link: youtube,
    });
  }
  if (linkedin) {
    items.push({
      id: 4,
      name: 'linkedin',
      icon: '/images/icon/linked-in.png',
      link: linkedin,
    });
  }
  if (pinterest) {
    items.push({
      id: 4,
      name: 'pinterest',
      icon: '/images/icon/pinterest.png',
      link: pinterest,
    });
  }
  return items;
};

const SocialIcons = () => {
  const { sanitySiteSettings: data } = useStaticQuery(query);

  return (
    <div>
      {socialNetworks({
        twitter: data.twitter,
        facebook: data.facebook,
        instagram: data.instagram,
        youtube: data.youtube,
        pinterest: data.pinterest,
        linkedin: data.linkedin,
      }).map(item => (
        <div key={item.id} type={item.name}>
          <a href={item.link} target="_blank" rel="noreferrer">
            <span> {item.icon}</span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialIcons;
