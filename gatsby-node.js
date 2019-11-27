const path = require('path')

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const articlePage = path.resolve(`./src/templates/article.js`)
  const tagsPage = path.resolve(`./src/templates/tags.js`)
  const tagPage = path.resolve(`./src/templates/tag.js`)
  const blogPage = path.resolve(`./src/templates/blog.js`)

  const {
    data: {
      posts: { edges },
      tags: { group },
    },
  } = await graphql(
    `
      {
        posts: allContentfulPost(sort: { fields: date, order: DESC }) {
          edges {
            node {
              id
              title
              slug
              date(formatString: "MMMM Do, YYYY")
              readingTime
              tags
              intro
              content {
                content
              }
              image {
                fluid {
                  src
                }
              }
            }
          }
        }
        tags: allContentfulPost {
          group(field: tags) {
            fieldValue
          }
        }
      }
    `
  )

  // Creates Blog Pages

  const blogPostsPerPage = 6
  const numberOfBlogPages = Math.ceil(edges.length / blogPostsPerPage)

  Array.from({ length: numberOfBlogPages }).forEach((_, i) => {
    const fromIndex = i * blogPostsPerPage
    const toIndex = i === 0 ? blogPostsPerPage : fromIndex + blogPostsPerPage
    const posts = edges.slice(fromIndex, toIndex)

    createPage({
      path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
      component: blogPage,
      context: {
        posts,
        numberOfBlogPages,
        currentPage: i + 1,
        location: '/blog',
      },
    })
  })

  // Creates Article Pages

  edges.forEach(
    ({
      node: {
        title,
        slug,
        date,
        readingTime,
        tags,
        intro,
        content: { content },
      },
    }) => {
      createPage({
        path: `/blog/${slug}/`,
        component: articlePage,
        context: {
          slug,
          title,
          date,
          readingTime,
          tags,
          intro,
          content,
        },
      })
    }
  )

  // Creates Tags Page

  createPage({
    path: `/blog/tags/`,
    component: tagsPage,
    context: {
      group,
    },
  })

  // Creates Tag Pages

  const createTagPages = tag => {
    const indexOfTag = tags => {
      return tags.indexOf(tag)
    }

    const tagPosts = edges.filter(({ node }) => {
      const tagIndex = indexOfTag(node.tags)
      return node.tags[tagIndex] === tag
    })

    const tagPostsPerPage = 6
    const numberOfTagPages = Math.ceil(tagPosts.length / tagPostsPerPage)

    Array.from({ length: numberOfTagPages }).forEach((_, i) => {
      const fromIndex = i * tagPostsPerPage
      const toIndex = i === 0 ? tagPostsPerPage : fromIndex + tagPostsPerPage
      const posts = tagPosts.slice(fromIndex, toIndex)

      createPage({
        path: i === 0 ? `/blog/tags/${tag}` : `/blog/tags/${tag}/${i + 1}`,
        component: tagPage,
        context: {
          posts,
          numberOfTagPages,
          currentPage: i + 1,
          location: `/blog/tags/${tag}`,
          data: tag,
        },
      })
    })
  }

  group.forEach(({ fieldValue }) => createTagPages(fieldValue))
}
