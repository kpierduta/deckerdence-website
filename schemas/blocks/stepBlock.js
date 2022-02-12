export default {
  name: 'stepBlock',
  title: '🏘 Step block',
  type: 'object',

  fields: [
    {
      name: 'stepBlock',
      title: 'Step block',
      type: 'array',
      of: [{ type: 'stepBlockItem' }],
    },
  ],
};
