export default {
  name: 'tableItem',
  title: '🏘 Table Item',
  type: 'object',
  fields: [
    {
      name: 'keyInfo',
      title: 'Key information',
      type: 'string',
    },
    {
      name: 'classicInfo',
      title: 'Classic Info',
      type: 'string',
    },
    {
      name: 'ultimaInfo',
      title: 'Ultimate Info',
      type: 'string',
    },
    {
      name: 'essentialInfo',
      title: 'Essential Info',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'keyInfo',
    },
  },
};
