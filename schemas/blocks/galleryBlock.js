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
    {
      name: 'linkTo',
      title: 'Link to',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'galleryBlock.0.title',
      image: 'galleryBlock.0.image',
      subtitle: 'subtitle',
    },
    prepare({ title, image }) {
      return {
        title: title || '🍀 Gallery Block',
        media: image,
        subtitle: 'Three images gallery',
      };
    },
  },
};
