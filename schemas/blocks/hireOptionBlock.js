export default {
  name: 'hireOptionBlock',
  title: '🏘 Three Hire option block',
  type: 'object',
  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'markdown',
    },
    {
      name: 'linkTo',
      title: 'Button Link to:-',
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
