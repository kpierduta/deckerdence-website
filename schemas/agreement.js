import { FcPrivacy } from 'react-icons/fc';
export default {
  name: 'agreement',
  title: 'Agreements',
  icon: FcPrivacy,
  type: 'document',
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
      title: 'Slug',
      name: 'slug',
      type: 'slug',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      title: 'Rich text',
      name: 'myRichText',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
  },
};
