import pageBlocks from '../data/pageBlocks';

export default {
  name: 'hireOptionsPage',
  title: 'Hire Options Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
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
      media: 'image',
    },
  },
};
