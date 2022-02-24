import React from 'react';

export default {
  name: 'headingBlock',
  title: '#️⃣ Heading Block',
  type: 'object',

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'markdown',
    },
    {
      name: 'linkTo',
      title: 'Link to',
      type: 'string',
    },
    {
      name: 'variant',
      title: 'Variant',
      type: 'boolean',
      description: 'If true, the color of the section will be dark.',
    },
  ],
  preview: {
    select: {
      title: 'title',
      variant: 'variant',
    },
    prepare({ title, variant }) {
      return {
        title: title || 'Heading block',
        subtitle: variant ? 'Variant is light' : 'Variant is dark',
        media: <span style={{ fontSize: '1.5rem' }}>#️⃣</span>,
      };
    },
  },
};
