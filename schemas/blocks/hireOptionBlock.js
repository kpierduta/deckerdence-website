export default {
  name: 'hireOptionBlock',
  title: '🏘 Three Hire option block',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'mostPopular',
      title: 'Most Popular',
      type: 'boolean',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'markdown',
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
        title: title || 'Three Hire option block',
        media: image,
        subtitle: 'Three hire options block',
      };
    },
  },
};
