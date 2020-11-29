const path = require('path')

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query AllProducts {
      allContentfulProduct {
        totalCount
        edges {
          node {
            productId
            title
            name
            price
            type
            description {
              id
              description
            }
            relatedImages {
              title
              file {
                url
              }
              fluid {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
            image {
              file {
                url
              }
              fluid {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // Create pages for each markdown file.
  const productTemplate = path.resolve('src/template/product.js')
  result.data.allContentfulProduct.edges.forEach(({ node }, index) => {
    const path = `/products/${node.productId}`
    createPage({
      path,
      component: productTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        key: node.productId,
        product: node,
        pagePath: path,
      },
    })
  })

  createPage({
    path: '/for-sale',
    component: path.resolve(`src/template/for-sale.js`),
    context: {
      products: result.data.allContentfulProduct.edges.map(({ node }) => node),
      pagePath: '/for-sale',
    }
  })
}
