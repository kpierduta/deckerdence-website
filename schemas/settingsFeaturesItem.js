export default {
  title: 'Settings Features Item',
  name: 'settingsFeaturesItem',
  type: 'object',
  fields: [
    {
      name: 'hasRight',
      title: 'Has Right',
      type: 'boolean',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your Features.',
    },
    {
      name: 'featuresBackgroundImage',
      title: 'Features Background Image',
      type: 'image',
    },
    {
      name: 'featuresFrameImage',
      title: 'Features Frame Image',
      type: 'image',
    },
    {
      title: 'Button Link',
      name: 'buttonLink',
      type: 'slug',
    },
    {
      title: 'Animations',
      name: 'animations',
      type: 'string',
      options: {
        list: [
          { title: 'Animation One', value: 'animation-one' },
          { title: 'Animation Two', value: 'animation-two' },
          { title: 'Animation Third', value: 'animation-third' },
          { title: 'Animation Fourth', value: 'animation-fourth' },
        ],
        layout: 'radio',
      },
    },
  ],
};
