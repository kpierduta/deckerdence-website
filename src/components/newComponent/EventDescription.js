import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: ${props => props.theme.backgroundDarkSecondary};
  .empty {
    background-color: ${props => props.theme.backgroundDarkSecondary};
  }
`;

const ContentColumn = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  padding: 3rem;
  margin-bottom: 1.5rem;
  p {
    padding: 1rem 0;
  }
`;

const Wrapper = styled.div`
  flex-direction: ${props => (props.hasColRev ? 'row-reverse' : ' ')};
`;

const DescriptionItem = ({ title, hasColRev }) => (
  <Wrapper className="columns" hasColRev={hasColRev}>
    <ContentColumn className="column">
      <h1 className="title">{title}</h1>
      <p className="has-text-weight-bold">
        Deckerdence is a one a kind unique venue!
      </p>
      <p className="has-text-weight-bold">
        There are lots of structures and lots of mobile bars - but do they look
        like a wedding party or event you have been to before?
      </p>
      <p className="has-text-weight-bold">
        Deckerdence is the only venue that combines a stunning vintage bus bar
        and circular marquee into 1 exciting space!
      </p>
    </ContentColumn>
    <div className="column empty is-4 is-hidden-mobile" />
  </Wrapper>
);

const EventDescription = () => (
  <Section className="section">
    <div className="container">
      <DescriptionItem title="Bored of looking at tipi’s and marquees that all look the same?" />
      <DescriptionItem
        title="Bored of looking at tipi’s and marquees that all look the same?"
        hasColRev
      />
      <DescriptionItem title="Bored of looking at tipi’s and marquees that all look the same?" />
    </div>
  </Section>
);

export default EventDescription;
