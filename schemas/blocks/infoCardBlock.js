export default {
  name: 'infoCardBlock',
  title: '🌠 Info Card block',
  type: 'object',
  fields: [
    {
      title: 'Info Card block',
      name: 'infoCardBlock',
      type: 'array',
      of: [
        {
          title: 'Info Card',
          type: 'infoCardItem',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || '🌠 Info Card Block',
      };
    },
  },
};
