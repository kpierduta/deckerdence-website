import React from 'react';

export default {
  name: 'contentBlock',
  title: '#️⃣ Content Block',
  type: 'object',

  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'markdown',
      description: 'Describe your content block',
    },
    {
      name: 'targetButton',
      title: 'Target Button to',
      type: 'string',
    },
    {
      name: 'isDark',
      title: 'Is Dark',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      variant: 'isDark',
    },
    prepare({ variant }) {
      return {
        title: 'Content block',
        subtitle: variant ? 'Variant is light' : 'Variant is dark',
        media: <span style={{ fontSize: '1.5rem' }}>#️⃣</span>,
      };
    },
  },
};
