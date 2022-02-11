export default {
  name: 'venueItem',
  title: '🏘 Venue Item',
  type: 'object',

  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare(selection) {
      const { title, image } = selection;
      return {
        title: title || 'Venue Block',
        media: image,
      };
    },
  },

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
  ],
};
