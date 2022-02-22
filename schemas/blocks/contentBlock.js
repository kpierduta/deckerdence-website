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
      title: 'Background Color',
      description: 'Pick a color',
      name: 'backgroundColor',
      type: 'colorlist', // required
      options: {
        list: [
          { title: 'Grey', value: '#E9E9E9' },
          { title: 'Red', value: '#94272F' },
          { title: 'White', value: '#FFFFFF' },
        ],
      },
    },
  ],
  preview: {
    select: {
      variant: 'backgroundColor.title',
    },
    prepare({ variant }) {
      return {
        title: 'Content block',
        subtitle: variant,
        media: <span style={{ fontSize: '1.5rem' }}>#️⃣</span>,
      };
    },
  },
};
