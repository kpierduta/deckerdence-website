export default {
  name: 'footerOption',
  type: 'object',
  title: 'Footer Option',
  fields: [
    {
      title: 'Parent Heading',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Footer child item',
      name: 'footerOption',
      type: 'array',
      of: [{ type: 'footerItem' }],
    },
  ],
};
