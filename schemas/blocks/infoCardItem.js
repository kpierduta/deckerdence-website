export default {
  name: 'infoCardItem',
  title: '🙆‍♂️ Info Card Item',
  type: 'object',

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
    {
      name: 'price',
      title: 'Price',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'guests',
      title: 'Guests',
      type: 'string',
    },
    {
      name: 'mostPopular',
      title: 'Most Popular',
      type: 'boolean',
    },
  ],
};
