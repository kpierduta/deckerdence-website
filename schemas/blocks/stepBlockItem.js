export default {
  name: 'stepBlockItem',
  title: '🏘 Step block item',
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
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
};
