export default {
  title: 'Nav Item',
  name: 'navItem',
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
    },
  ],
};
