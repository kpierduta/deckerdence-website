export default {
  name: 'headingBlock',
  title: '🏘 Heading Block',
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
      name: 'variant',
      title: 'Variant',
      type: 'boolean',
      description: 'If true, the color of the section will be dark.',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title || 'Heading block',
      };
    },
  },
};
