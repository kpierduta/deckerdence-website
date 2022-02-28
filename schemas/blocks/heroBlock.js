export default {
  name: 'heroBlock',
  title: '🏘 Images Block',
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
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      image: 'image',
    },
    prepare({ title, image }) {
      return {
        title: title || 'Images Block',
        media: image,
      };
    },
  },
};
