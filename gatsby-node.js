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
            updatedAt
            title
            name
            price
            description {
              id
              description
            }
            relatedImages {
              title
              file {
                url
              }
            }
            image {
              file {
                url
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
    const path = `/products/${index + 1}`
    createPage({
      path,
      component: productTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        product: node,
        pagePath: path,
      },
    })
  })
}
