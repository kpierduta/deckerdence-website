export default {
  title: 'Footer',
  name: 'footer',
  type: 'document',
  fields: [
    {
      title: 'Footer data',
      name: 'footer',
      type: 'array',
      of: [{ type: 'footerOption' }],
    },
  ],
};
