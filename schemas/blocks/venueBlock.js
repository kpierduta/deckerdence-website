export default {
  name: 'venueBlock',
  title: '🏘 Venue Block',
  type: 'object',

  fields: [
    {
      name: 'venue',
      title: 'Venue Block',
      type: 'array',
      of: [{ type: 'venueItem' }],
    },
  ],
};
