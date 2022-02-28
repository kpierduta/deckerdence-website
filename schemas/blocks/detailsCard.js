import React from 'react';

export default {
  name: 'detailsCard',
  title: '🔣 Details Card Block',
  type: 'object',

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'markdown' }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Details Block',
        media: <span style={{ fontSize: '1.5rem' }}> 🔣</span>,
      };
    },
  },
};
