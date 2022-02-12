import React from 'react';

export default {
  name: 'formBlock',
  title: '🔣 Form Block',
  type: 'object',

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Form Block',
        subtitle: 'Describe your Form Block ',
        media: <span style={{ fontSize: '1.5rem' }}> 🔣</span>,
      };
    },
  },
};
