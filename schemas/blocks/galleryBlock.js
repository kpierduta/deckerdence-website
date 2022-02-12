export default {
  name: 'galleryBlock',
  title: '🍀 Gallery block',
  type: 'object',
  fields: [
    {
      title: 'Gallery Block',
      name: 'galleryBlock',
      type: 'array',
      of: [
        {
          title: 'Gallery Item',
          type: 'galleryItem',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      image: 'image',
    },
    prepare({ title, image }) {
      return {
        title: title || '🍀 Gallery Block',
        media: image,
      };
    },
  },
};
