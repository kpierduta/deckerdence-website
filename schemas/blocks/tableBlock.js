export default {
  name: 'tableBlock',
  title: '🏘 Table Block',
  type: 'object',
  fields: [
    {
      name: 'tableInfo',
      title: 'Table Info',
      type: 'array',
      of: [{ type: 'tableItem' }],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'ultimateButtonLink',
      title: 'Ultimate Button Link',
      type: 'string',
    },
    {
      name: 'classicButtonLink',
      title: 'Classic Button Link',
      type: 'string',
    },
    {
      name: 'essentialButtonLink',
      title: 'Essential Button Link',
      type: 'string',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Table Block',
      };
    },
  },
};
