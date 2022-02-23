const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructuring the createPage function from the actions object
  const { createPage, createRedirect } = actions;

  const result = await graphql(`
    query {
      allSanityPages {
        nodes {
          _id
          title
          slug {
            current
          }
        }
      }
      allSanityCreateRedirect {
        nodes {
          _id
          fromPath
          toPath
        }
      }

      allSanityVehicleHirePage {
        nodes {
          _id
          slug {
            current
          }
        }
      }
      allSanityMainPage {
        nodes {
          _id
          slug {
            current
          }
        }
      }
      allSanityGalleryPage {
        nodes {
          _id
          slug {
            current
          }
        }
      }
      allSanityBlogPage {
        nodes {
          _id

          slug {
            current
          }
        }
      }
      allSanityAgreement {
        nodes {
          _id
          slug {
            current
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const page = result.data.allSanityPages.nodes || [];
  const redirects = result.data.allSanityCreateRedirect.nodes || [];
  const hirePages = result.data.allSanityVehicleHirePage.nodes || [];
  const mainPage = result.data.allSanityMainPage.nodes || [];
  const galleryPage = result.data.allSanityGalleryPage.nodes || [];
  const blogPage = result.data.allSanityBlogPage.nodes || [];
  const agreement = result.data.allSanityAgreement.nodes || [];

  // Create all pages.

  page.forEach(item => {
    const slug = item.slug.current;
    const pageTemplate = path.resolve('./src/templates/pages.js');
    console.info(`Creating other main pages for: "${item.title}"...`);
    createPage({
      path: slug === 'homepage' ? '/' : slug,
      component: pageTemplate,
      context: {
        id: item._id,
        slug,
      },
    });
  });

  // Create blog post pages.
  hirePages.forEach(item => {
    const slug = item.slug.current;
    const pageTemplate = path.resolve('./src/templates/hireOptionPage.js');
    console.info(`Creating hirePages page for: "${item.title}"...`);
    createPage({
      path: slug,
      component: pageTemplate,
      context: {
        id: item._id,
        slug,
      },
    });
  });

  mainPage.forEach(item => {
    const slug = item.slug.current;
    const pageTemplate = path.resolve('./src/templates/mainPage.js');
    console.info(`Creating main page for: "${item.title}"...`);
    createPage({
      path: slug,
      component: pageTemplate,
      context: {
        id: item._id,
        slug,
      },
    });
  });

  galleryPage.forEach(item => {
    const slug = item.slug.current;
    const pageTemplate = path.resolve('./src/templates/galleryPage.js');
    console.info(`Creating gallery page for: "${item.title}"...`);
    createPage({
      path: `/${slug}`,
      component: pageTemplate,
      context: {
        id: item._id,
        slug,
      },
    });
  });

  blogPage.forEach(item => {
    const slug = item.slug.current;
    const pageTemplate = path.resolve('./src/templates/blogArticle.js');
    console.info(`Creating blog page for: "${item.title}"...`);
    createPage({
      path: `/blog/${slug}`,
      component: pageTemplate,
      context: {
        id: item._id,
        slug,
      },
    });
  });

  agreement.forEach(item => {
    const slug = item.slug.current;
    const pageTemplate = path.resolve('./src/templates/agreement.js');
    console.info(`Creating agreement page page for: "${item.title}"...`);
    createPage({
      path: `${slug}`,
      component: pageTemplate,
      context: {
        id: item._id,
        slug,
      },
    });
  });

  if (redirects.length > 0) {
    redirects.forEach(item => {
      console.info(`Creating redirect for: "${item.fromPath}"...`);
      createRedirect({
        fromPath: item.fromPath,
        toPath: item.toPath,
        isPermanent: true,
        redirectInBrowser: true,
      });
    });
  }
  return null;
};
