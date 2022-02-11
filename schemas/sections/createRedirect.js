export default {
  title: 'Create Redirect',
  name: 'createRedirect',
  type: 'document',
  preview: {
    select: {
      title: 'fromPath',
      subtitle: 'toPath',
    },
  },
  fields: [
    {
      title: 'From Path',
      name: 'fromPath',
      type: 'string', // not slug due to unique issue
      validation: (Rule) => Rule.required(),
      description: 'Describe your permanent url for eg:- /old-url/work/',
    },
    {
      title: 'To Path',
      name: 'toPath',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Describe your new url for redirect eg:- /works/all/',
    },
  ],
};
