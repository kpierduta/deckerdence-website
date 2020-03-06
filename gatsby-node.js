const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  // We only want to operate on `Mdx` nodes. If we had content from a
  // remote CMS we could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      // Name of the field you are adding
      name: 'slug',
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. We
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `${value}`,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allSanityVehicleHirePage {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      allSanityMainPage {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      allSanityGalleryPage {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  // Create blog post pages.
  result.data.allSanityVehicleHirePage.edges.forEach(({ node }) => {
    createPage({
      path: `/hire/${node.slug.current}`,
      component: path.resolve(`./src/templates/hireOptionPage.js`),
      context: {
        slug: node.slug.current,
      },
    });
  });
  result.data.allSanityMainPage.edges.forEach(({ node }) => {
    createPage({
      path: node.slug.current,
      component: path.resolve(`./src/templates/mainPage.js`),
      context: {
        slug: node.slug.current,
      },
    });
  });
  result.data.allSanityGalleryPage.edges.forEach(({ node }) => {
    createPage({
      path: `/gallery/${node.slug.current}`,
      component: path.resolve(`./src/templates/galleryPage.js`),
      context: {
        slug: node.slug.current,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
