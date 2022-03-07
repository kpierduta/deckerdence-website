import React from 'react';

import { EmptyState } from '../components/elements';

import HomeBanner from '../components/hero/HomeBanner';
import WelcomeHeading from '../components/welcome/WelcomeHeading';
import Venues from '../components/venue/Venues';
import VenueInfoBlock from '../components/venue/VenueInfoBlock';
import Gallery from '../components/gallery/Gallery';
import Testimonial from '../components/testimonial/Testimonial';
import ContentBlock from '../components/welcome/ContentBlock';
import InfoSteps from '../components/steps/InfoSteps';
import KeyInformation from '../components/table/KeyInformation';
import StatsTable from '../components/table/StatsTable';

import RevenueBlock from '../components/table/RevenueBlock';
import HireOptionBlock from '../components/hire/HireOptionBlock';
import HireHero from '../components/hero/HireHero';
import OwnerBlock from '../components/team/OwnerBlock';
import ContactBlock from '../components/contact/ContactBlock';
import DetailsCardSection from '../components/DetailsCardSection';
import VenueSection from '../components/VenueSection';
import StagesCard from '../components/StagesCard';

// sanity blocks
const Blocks = {
  heroBlock: HomeBanner,
  headingBlock: WelcomeHeading,
  venueBlock: Venues,
  venueInfoBlock: VenueInfoBlock,
  galleryBlock: Gallery,
  testimonialBlock: Testimonial,
  contentBlock: ContentBlock,
  stepBlock: InfoSteps,
  tableBlock: KeyInformation,
  hireOptionBlock: HireOptionBlock,
  ownerBlock: OwnerBlock,
  formBlock: ContactBlock,
  revenueBlock: RevenueBlock,
  yearlyRevenueBlock: StatsTable,
  hireHeroBlock: HireHero,
  detailsCard: DetailsCardSection,
  eventBlock: VenueSection,
  infoCardBlock: StagesCard,
};

const ContentBlocks = type => {
  const BlockNotFound = () => (
    <EmptyState title="Error: The requested component" message={type} />
  );

  if (typeof Blocks[type] === 'undefined') {
    return BlockNotFound;
  }

  return Blocks[type];
};

export default ContentBlocks;
