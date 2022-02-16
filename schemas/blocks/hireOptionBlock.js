export default {
  name: 'hireOptionBlock',
  title: '🏘 Three Hire option block',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'All Hire option block',
        subtitle: 'Three hire options block',
      };
    },
  },
};
