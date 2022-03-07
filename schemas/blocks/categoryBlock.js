export default {
  name: 'categoryBlock',
  title: '🍀 Category Block',
  type: 'object',
  fields: [
    {
      title: 'Category Block',
      name: 'categoryBlock',
      type: 'array',
      of: [
        {
          title: 'Category Item',
          type: 'categoryItem',
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
        title: title || '🍀 Category Block',
      };
    },
  },
};
