import { FaDatabase } from 'react-icons/fa';

export default {
  name: 'testimonial',
  title: 'Testimonials',
  icon: FaDatabase,
  type: 'document',
  fields: [
    {
      title: 'Order',
      name: 'order',
      type: 'number',
    },
    {
      title: 'Column Reverse',
      name: 'columnReverse',
      type: 'boolean',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
      media: 'image',
    },
  },
};
