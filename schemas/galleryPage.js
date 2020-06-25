import { FcGallery } from 'react-icons/fc';

export default {
  name: 'galleryPage',
  title: 'Gallery Page',
  icon: FcGallery,
  type: 'document',

  fields: [
    {
      name: 'seoTitle',
      title: 'Seo Title',
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
      type: 'text',
    },
    {
      title: 'Order',
      name: 'order',
      type: 'number',
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
      name: 'galleryTitle',
      title: 'Gallery Title',
      type: 'string',
    },
    {
      title: 'Gallery Images',
      name: 'galleryImages',
      type: 'gallery',
    },
    {
      title: 'Footer Title',
      name: 'footerTitle',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'galleryTitle',
      subtitle: 'slug.current',
    },
  },
};
