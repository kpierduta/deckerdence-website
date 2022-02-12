export default {
  name: 'ownerBlock',
  title: '🏘 Owner block',
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
      title: 'Owners',
      name: 'owners',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'team' }],
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
        title: `Owner block :-  ${title} `,
        subtitle: 'Select owners list from team section',
      };
    },
  },
};
