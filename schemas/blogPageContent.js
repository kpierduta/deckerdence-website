import { BsImageFill } from 'react-icons/bs';

export default {
  title: 'Blog Article Content',
  name: 'blogPageContent',
  type: 'object',
  fields: [
    {
      name: 'portableText',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
        { type: 'image', icon: BsImageFill },
        {
          type: 'youtube',
        },
      ],
    },
  ],
};
