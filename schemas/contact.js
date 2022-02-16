import { GrContactInfo } from 'react-icons/gr';

export default {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  icon: GrContactInfo,
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish',
  ],
  fields: [
    {
      title: 'Seo Title',
      name: 'seoTitle',
      type: 'string',
    },
    {
      title: 'Seo Keywords',
      name: 'seoKeywords',
      type: 'string',
    },
    {
      title: 'Seo Meta Description',
      name: 'seoMetaDescription',
      type: 'string',
    },
    {
      title: 'Main Heading',
      name: 'mainHeading',
      type: 'string',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
    },
    {
      name: 'banner',
      type: 'image',
      title: 'Banner',
    },
    {
      title: 'Contact Item',
      name: 'contactItem',
      type: 'array',
      of: [
        {
          title: 'Content',
          type: 'settingsContactUsItem',
        },
      ],
    },
    {
      title: 'Files',
      name: 'file',
      type: 'array',
      of: [
        {
          title: 'contacts',
          type: 'contactFile',
        },
      ],
    },
    {
      name: 'downloadBrochure',
      type: 'image',
      title: 'Download Brochure',
    },
    {
      title: 'Download Files',
      name: 'downloadFiles',
      type: 'array',
      of: [
        {
          type: 'file',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'mainHeading',
      media: 'image',
    },
  },
};
