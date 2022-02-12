export default {
  title: 'Footer Item',
  name: 'footerItem',
  type: 'object',
  fields: [
    {
      title: 'Label',
      name: 'label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Link to',
      name: 'linkTo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};
