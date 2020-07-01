// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './blockContent';
import about from './about';
import aboutFeature from './aboutFeature';
import galleryPage from './galleryPage';
import mainPage from './mainPage';
import vehicleHirePage from './vehicleHirePage';
import siteSettings from './siteSettings';
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
import blogPage from './blogPage';
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
    aboutFeature,
    about,
    mainPage,
    galleryPage,
    vehicleHirePage,
    blogPage,
    agreement,
    contact,
    siteSettings,
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
