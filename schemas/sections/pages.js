import pageBlocks from '../data/pageBlocks';

export default {
  title: 'Pages',
  name: 'pages',
  type: 'document',
  fields: [
    {
      title: 'Page/Seo Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 200,
      },
    },
    {
      name: 'seoFeaturedImage',
      title: 'Seo & Cover Page Image',
      type: 'image',
    },
    {
      title: 'Page/Seo Description',
      name: 'seoDescription',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Page/Seo Keywords',
      name: 'seoKeywords',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'contentBlocks',
      title: 'Content Blocks',
      description:
        "🍢 Control the content of your page here. It's like a buffet of content — take your pick!",
      type: 'array',
      of: [...pageBlocks],
      options: {
        editModal: 'fullscreen',
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      media: 'seoFeaturedImage',
    },
  },
};
