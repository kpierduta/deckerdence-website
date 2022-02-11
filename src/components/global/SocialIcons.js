import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

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

const Image = styled.img`
  height: 42px;
  width: 42px;
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
      id: 10,
      name: 'instagram',
      icon: '/images/icon/instagram.png',
      link: instagram,
    });
  }
  if (youtube) {
    items.push({
      id: 11,
      name: 'youtube',
      icon: '/images/icon/youtube.png',
      link: youtube,
    });
  }
  if (linkedin) {
    items.push({
      id: 12,
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
    <div className="">
      {socialNetworks({
        twitter: data.twitter,
        facebook: data.facebook,
        instagram: data.instagram,
        youtube: data.youtube,
        pinterest: data.pinterest,
        linkedin: data.linkedin,
      }).map(item => (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          key={item.id}
          className="p-3">
          <Image src={item.icon} alt={item.name} />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
