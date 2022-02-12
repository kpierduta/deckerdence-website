import React from 'react';

export default {
  name: 'venueBlock',
  title: '🌲 Venue Block',
  type: 'object',

  fields: [
    {
      name: 'venue',
      title: 'Venue Block',
      type: 'array',
      of: [{ type: 'venueItem' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Venue Block',
        subtitle: 'Three venues block',
        media: <span style={{ fontSize: '1.5rem' }}>🌲</span>,
      };
    },
  },
};
