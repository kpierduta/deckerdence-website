import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

// import { FaYoutube } from 'react-icons/fa';
// import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
// import { BsFacebook } from 'react-icons/bs';
import config from '../../utils/config';

// const query = graphql`
//   query socialUrlQuery {
//     sanityGlobals {
//       instagram
//       facebook
//       youtube
//       twitter
//     }
//   }
// `;

const Container = styled.div`
  display: flex;
`;

const IconWrapper = styled.div`
  img {
    height: 40px !important;
    width: 40px !important;
  }
`;

// const socialNetworks = ({ twitter, facebook, instagram, youtube }) => {
//   const items = [];
//   if (twitter) {
//     items.push({
//       id: 1,
//       name: 'twitter',
//       icon: <AiOutlineTwitter />,
//       link: twitter,
//     });
//   }
//   if (facebook) {
//     items.push({
//       id: 2,
//       name: 'facebook',
//       icon: <BsFacebook />,
//       link: facebook,
//     });
//   }
//   if (instagram) {
//     items.push({
//       id: 3,
//       name: 'instagram',
//       icon: <AiFillInstagram />,
//       link: instagram,
//     });
//   }
//   if (youtube) {
//     items.push({
//       id: 4,
//       name: 'youtube',
//       icon: <FaYoutube />,
//       link: youtube,
//     });
//   }
//   return items;
// };

const socialIcons = [
  { key: '1', icon: '/images/icon/facebook.png', link: config.facebook },
  { key: '2', icon: '/images/icon/twitter.png', link: config.twitter },
  { key: '3', icon: '/images/icon/linked-in.png', link: config.linkedin },
  { key: '4', icon: '/images/icon/instagram.png', link: config.instagram },
  { key: '5', icon: '/images/icon/pinterest.png', link: config.pinterest },
  { key: '6', icon: '/images/icon/youtube.png', link: config.youTube },
];

const SocialIcons = () => {
  // const { sanityGlobals: data } = useStaticQuery(query);

  return (
    <Container>
      {socialIcons.map(item => (
        <IconWrapper key={item.id} type={item.icon}>
          <a
            href={item.link}
            // tw="cursor-pointer text-xl relative text-white"
            target="_blank"
            rel="noreferrer"
          >
            <a href={item.link} key={item.key}>
              <img
                src={item.icon}
                alt="deckerdence social icon"
                width="100px"
              />
            </a>
          </a>
        </IconWrapper>
      ))}
    </Container>
  );
};

export default SocialIcons;
