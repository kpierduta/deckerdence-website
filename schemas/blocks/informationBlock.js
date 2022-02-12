export default {
  name: 'informationBlock',
  title: '🏘 Information block',
  type: 'object',

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'markdown',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
