// First, we must import the schema creator
// eslint-disable-next-line import/no-unresolved
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
// eslint-disable-next-line import/no-unresolved
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import pages from './sections/pages';
import createRedirect from './sections/createRedirect';
import siteSettings from './sections/siteSettings';
import team from './sections/team';
import testimonial from './sections/testimonial';
import blogPage from './sections/blogPage';
import galleryPage from './sections/galleryPage';
import vehicleHirePage from './sections/vehicleHirePage';
import footer from './sections/footer';
import navigation from './sections/navigation';
import mainPage from './sections/mainPage';

// blocks
import heroBlock from './blocks/heroBlock';
import detailsCard from './blocks/detailsCard';
import eventBlock from './blocks/eventBlock';
import hireHeroBlock from './blocks/hireHeroBlock';
import headingBlock from './blocks/headingBlock';
import venueItem from './blocks/venueItem';
import venueBlock from './blocks/venueBlock';
import venueInfoBlock from './blocks/venueInfoBlock';
import informationBlock from './blocks/informationBlock';
import testimonialBlock from './blocks/testimonialBlock';
import galleryItem from './blocks/galleryItem';
import galleryBlock from './blocks/galleryBlock';
import infoCardItem from './blocks/infoCardItem';
import infoCardBlock from './blocks/infoCardBlock';
import categoryItem from './blocks/categoryItem';
import categoryBlock from './blocks/categoryBlock';
import contentBlock from './blocks/contentBlock';
import stepBlockItem from './blocks/stepBlockItem';
import stepBlock from './blocks/stepBlock';
import ownerBlock from './blocks/ownerBlock';
import teamBlock from './blocks/teamBlock';
import formBlock from './blocks/formBlock';
import hireOptionBlock from './blocks/hireOptionBlock';
import tableBlock from './blocks/tableBlock';
import yearlyRevenueBlock from './blocks/yearlyRevenueBlock';
import tableItem from './blocks/tableItem';
import yearStatTableItem from './blocks/yearStatTableItem';

// settings objects

import footerItem from './settings/footerItem';
import footerOption from './settings/footerOption';
import navItem from './settings/navItem';

import blockContent from './blockContent';
import about from './about';
import settingsFeatures from './settingsFeatures';
import settingsFeaturesItem from './settingsFeaturesItem';
import settingsVehicleFeature from './settingsVehicleFeature';
import settingsVehicleFeatureItem from './settingsVehicleFeatureItem';
import settingsContactUsItem from './settingsContactUsItem';
import pageSimpleStage from './pageSimpleStage';
import pageSimpleStageItem from './pageSimpleStageItem';
import mainPageGallery from './mainPageGallery';
import gallery from './gallery';
import galleryImage from './galleryImage';
import vehicleInformation from './vehicleInformation';
import vehicleInformationItem from './vehicleInformationItem';
import vehicleFeatureItem from './vehicleFeatureItem';
import vehicleFeature from './vehicleFeature';
import contact from './contact';
import mainPageArcade from './mainPageArcade';
import mainPageFinerDetail from './mainPageFinerDetail';
import blogPageContent from './blogPageContent';
import siteSettingsExtra from './siteSettingsExtra';
import siteSettingsExtraItem from './siteSettingsExtraItem';
import contactFile from './contactFile';
import youtube from './youtube';
import agreement from './agreement';
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.

    // sections schema
    pages,
    createRedirect,
    team,
    testimonial,
    siteSettings,
    blogPage,
    footer,
    navigation,
    galleryPage,

    // blocks
    heroBlock,
    detailsCard,
    eventBlock,
    hireHeroBlock,
    headingBlock,
    informationBlock,
    venueItem,
    venueBlock,
    venueInfoBlock,
    testimonialBlock,
    galleryItem,
    galleryBlock,
    infoCardItem,
    infoCardBlock,
    categoryItem,
    categoryBlock,
    contentBlock,
    stepBlock,
    stepBlockItem,
    ownerBlock,
    teamBlock,
    formBlock,
    hireOptionBlock,
    tableBlock,
    yearlyRevenueBlock,
    tableItem,
    yearStatTableItem,

    // settings objects
    footerItem,
    footerOption,
    navItem,

    // blocks need to clean code and delete

    about,
    mainPage,
    vehicleHirePage,
    agreement,
    contact,
    settingsFeatures,
    settingsFeaturesItem,
    settingsVehicleFeature,
    settingsVehicleFeatureItem,
    siteSettingsExtra,
    siteSettingsExtraItem,
    settingsContactUsItem,
    pageSimpleStage,
    pageSimpleStageItem,
    mainPageGallery,
    gallery,
    galleryImage,
    vehicleInformation,
    vehicleInformationItem,
    vehicleFeature,
    vehicleFeatureItem,
    mainPageArcade,
    mainPageFinerDetail,
    blogPageContent,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    contactFile,
    youtube,
    blockContent,
  ]),
});
