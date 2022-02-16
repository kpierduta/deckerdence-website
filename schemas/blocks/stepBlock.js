import React from 'react';

export default {
  name: 'stepBlock',
  title: '🖌️ Step block',
  type: 'object',

  fields: [
    {
      name: 'stepBlock',
      title: 'Step block',
      type: 'array',
      of: [{ type: 'stepBlockItem' }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Step block `,
        media: <span style={{ fontSize: '1.5rem' }}> 🖌️</span>,
      };
    },
  },
};
