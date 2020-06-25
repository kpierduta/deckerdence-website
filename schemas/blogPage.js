import { GrArticle } from 'react-icons/gr';
export default {
  name: 'blogPage',
  title: 'Blog Page',
  icon: GrArticle,

  type: 'document',
  fields: [
    {
      name: 'isSizeHalf',
      title: 'Is Size Half',
      type: 'boolean',
    },
    {
      name: 'hasTextBlack',
      title: 'Has Text Black',
      type: 'boolean',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Category Set',
      name: 'categorySet',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Latest Journal', value: 'LATEST JOURNAL' },
          {
            title: 'The Deckerdence Journal',
            value: 'THE DECKERDENCE JOURNAL',
          },
          { title: 'All Things Weddings', value: 'ALL THINGS WEDDINGS' },
          { title: 'Event Planning', value: 'EVENT PLANNING' },
          { title: 'Supplier Journal', value: 'SUPPLIER JOURNAL' },
        ],
      },
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      title: 'Release date',
      name: 'releaseDate',
      type: 'date',
    },

    {
      name: 'blogArticleSeoTitle',
      title: 'Blog Article Seo Title',
      type: 'string',
    },
    {
      title: 'Blog Article Seo Keywords',
      name: 'blogArticleSeoKeywords',
      type: 'string',
    },
    {
      title: 'Blog Article Seo Meta Description',
      name: 'blogArticleSeoMetaDescription',
      type: 'text',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'blogPageContent',
    },
    {
      name: 'blogArticleCategoriesHeading',
      title: 'Blog Article Categories Heading',
      type: 'string',
    },
    {
      title: 'Blog Article Categories',
      name: 'blogArticleCategories',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'image',
      title: 'Thumbnail Image',
      type: 'image',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      media: 'image',
    },
  },
};
