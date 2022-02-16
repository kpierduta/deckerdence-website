export default {
  title: 'Footer',
  name: 'footer',
  type: 'document',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish',
  ],
  fields: [
    {
      title: 'Footer data',
      name: 'footer',
      type: 'array',
      of: [{ type: 'footerOption' }],
    },
  ],
};
