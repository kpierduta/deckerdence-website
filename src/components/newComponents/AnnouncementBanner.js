import React from 'react';
import styled from 'styled-components';

import { Title, SubTitle } from '../elements';

const Section = styled.section`
  background-color: ${props => props.theme.backgroundDark};
`;

const AnnouncementBanner = ({ title, subTitle }) => (
  <Section className="section">
    <div className="container has-text-centered">
      <Title title={title} />
      <SubTitle subTitle={subTitle} />
    </div>
  </Section>
);

export default AnnouncementBanner;
