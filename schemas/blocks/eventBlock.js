import React from 'react';

export default {
  name: 'eventBlock',
  title: '🔣 Event Block',
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
        title: 'Event Block',
        media: <span style={{ fontSize: '1.5rem' }}> 🔣</span>,
      };
    },
  },
};
