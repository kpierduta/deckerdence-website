export default {
  name: 'yearlyRevenueBlock',
  title: '🏘 Yearly Revenue Block',
  type: 'object',
  fields: [
    {
      name: 'tableInfo',
      title: 'Table Info',
      type: 'array',
      of: [{ type: 'yearStatTableItem' }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Revenue Table Block',
      };
    },
  },
};
