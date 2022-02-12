export default {
  name: 'teamBlock',
  title: '🏘 Team block',
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
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: `Team block :-  ${title} `,
        subtitle: 'Get all team members from team section',
      };
    },
  },
};
