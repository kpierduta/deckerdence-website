export default {
  name: 'tableBlock',
  title: '🏘 Table Block',
  type: 'object',
  fields: [
    {
      name: 'essentialInfo',
      title: 'Essential Info',
      type: 'array',
      of: [{ type: 'tableItem' }],
    },
  ],
};
