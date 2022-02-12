import React from 'react';

export default {
  name: 'venueInfoBlock',
  title: '🏘 Venue Information block',
  type: 'object',

  fields: [
    {
      name: 'venueInfo',
      title: 'Venue info block',
      type: 'array',
      of: [{ type: 'informationBlock' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Venue Info block',
        subtitle: 'Three row text block component',
        media: <span style={{ fontSize: '1.5rem' }}>🌌</span>,
      };
    },
  },
};
