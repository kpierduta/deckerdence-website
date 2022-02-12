export default {
  name: 'testimonialBlock',
  title: '🌲 Testimonial Block',
  type: 'object',

  fields: [
    {
      title: 'Testimonial',
      name: 'testimonial',
      type: 'reference',
      to: [{ type: 'testimonial' }],
    },
  ],
  preview: {
    select: {
      title: 'testimonial.title',
      image: 'testimonial.image',
      order: 'testimonial.order',
      boolean: 'testimonial.columnReverse',
    },
    prepare({ title, image, order, boolean }) {
      return {
        title: title || 'Testimonial Block',
        subtitle: `${order + boolean}`,
        media: image,
      };
    },
  },
};
