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
  ],
  preview: {
    prepare() {
      return {
        title: 'Table Block',
      };
    },
  },
};
