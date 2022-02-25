export default {
  name: 'heroBlock',
  title: '🏘 Home hero',
  type: 'object',
  description: 'A section containing first basic content.',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'title',
      image: 'image',
    },
    prepare({ title, image }) {
      return {
        title: title || 'Hero Block',
        media: image,
      };
    },
  },
};
