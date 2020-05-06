export default {
  title: 'About',
  name: 'about',
  type: 'object',
  fields: [
    {
      name: 'seoTitle',
      title: 'Seo Title',
      type: 'string',
    },
    {
      name: 'seoKeywords',
      title: 'Seo Keywords',
      type: 'string',
    },
    {
      name: 'seoMetaDescription',
      title: 'Seo Meta Description',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
    },
    {
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
    },
    {
      name: 'middleText',
      title: 'Middle Text ',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
    },
    {
      title: 'Information',
      name: 'information',
      type: 'array',
      of: [
        {
          title: 'Section',
          type: 'aboutFeature',
        },
      ],
    },
  ],
};