export default {
  name: 'venueItem',
  title: '🏘 Venue Item',
  type: 'object',

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Venue Image',
      type: 'image',
    },
    {
      name: 'linkTo',
      title: 'Link to',
      type: 'string',
    },
  ],
};
