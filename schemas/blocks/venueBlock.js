export default {
  name: 'venueBlock',
  title: '🏘 Venue Block',
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
  ],
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
};
