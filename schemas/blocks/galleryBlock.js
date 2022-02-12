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
      title: 'galleryBlock.0.title',
      image: 'galleryBlock.0.image',
    },
    prepare({ title, image }) {
      return {
        title: title || '🍀 Gallery Block',
        media: image,
      };
    },
  },
};
