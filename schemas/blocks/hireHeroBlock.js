export default {
  name: 'hireHeroBlock',
  title: '🏘 Hire hero block',
  type: 'object',
  description: 'A section containing first basic content.',
  fields: [
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
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      type: 'reference',
      name: 'target',
      title: 'Target Page',
      to: [{ type: 'pages' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      image: 'image',
    },
    prepare({ title, image }) {
      return {
        title: title || 'Hire Hero Block',
        media: image,
      };
    },
  },
};
