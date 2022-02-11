export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish',
  ],
  fields: [
    {
      title: 'Site Title/Name / Default SEO Title/Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Website Url(important)',
      name: 'siteUrl',
      type: 'string',
    },
    {
      name: 'logoImage',
      title: 'Logo Image/svg',
      type: 'image',
    },
    {
      name: 'defaultSeoImage',
      title: 'Default SEO Image',
      type: 'image',
    },
    {
      title: 'Default Seo Description',
      name: 'defaultSeoDescription',
      type: 'string',
    },
    {
      title: 'Default Seo Keywords',
      name: 'defaultSeoKeywords',
      type: 'string',
    },
    {
      name: 'homeSeoTitle',
      title: 'Home Seo Title',
      type: 'string',
    },
    {
      title: 'Home Seo Keywords',
      name: 'homeSeoKeywords',
      type: 'string',
    },
    {
      title: 'Home Seo Meta Description',
      name: 'homeSeoMetaDescription',
      type: 'text',
    },
    {
      name: 'homeHeroBackgroundImage',
      title: 'Home Hero Background Image',
      type: 'image',
    },

    {
      name: 'telephone',
      type: 'string',
      title: 'Telephone',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      title: 'Address',
      name: 'address',
      type: 'string',
    },
    {
      title: 'Location URL for google map',
      name: 'location',
      type: 'url',
    },
    {
      title: 'Twitter url',
      name: 'twitter',
      type: 'url',
    },
    {
      title: 'Facebook url',
      name: 'facebook',
      type: 'url',
    },
    {
      title: 'Instagram url',
      name: 'instagram',
      type: 'url',
    },
    {
      title: 'Youtube url',
      name: 'youtube',
      type: 'url',
    },
    {
      title: 'Pinterest url',
      name: 'pinterest',
      type: 'url',
    },
    {
      title: 'Linkedin url',
      name: 'linkedin',
      type: 'url',
    },
    {
      title: 'Home Features',
      name: 'homeFeatures',
      type: 'settingsFeatures',
    },
    {
      title: 'Simple Stages',
      name: 'simpleStages',
      type: 'pageSimpleStage',
    },
    {
      name: 'hireOptionSeoTitle',
      title: 'Hire Option Seo Title',
      type: 'string',
    },
    {
      title: 'Hire Option Seo Keywords',
      name: 'hireOptionSeoKeywords',
      type: 'string',
    },
    {
      title: 'Hire Option Seo Meta Description',
      name: 'hireOptionSeoMetaDescription',
      type: 'text',
    },
    {
      name: 'hireOptionSmallText',
      type: 'string',
      title: 'Hire Option Small Text',
    },
    {
      name: 'hireOptionLargeText',
      type: 'string',
      title: 'Hire Option Large Text',
    },
    {
      name: 'hireOptionDescription',
      type: 'text',
      title: 'Hire Option Description',
      description: 'Describe your hireOption .',
    },
    {
      name: 'hireOptionBackgroundImage',
      title: 'Hire Option Background Image',
      type: 'image',
    },
    {
      title: 'Extras Page',
      name: 'extrasPage',
      type: 'siteSettingsExtra',
    },
    {
      title: 'About Page',
      name: 'aboutPage',
      type: 'about',
    },
    {
      title: 'Testimonials Page',
      name: 'testimonialsPage',
      type: 'about',
    },
    {
      title: 'Blog Seo Title',
      name: 'blogSeoTitle',
      type: 'string',
    },
    {
      title: 'Blog Seo Keywords',
      name: 'blogSeoKeywords',
      type: 'string',
    },
    {
      title: 'Blog Seo Meta Description',
      name: 'blogSeoMetaDescription',
      type: 'text',
    },
    {
      title: 'Blog Main Title',
      name: 'blogMainTitle',
      type: 'string',
    },
  ],
};
