const path = require('path')

exports.createPages = async ({ graphql, actions: { createPage } }) => {
	const blogPostTemplate = path.resolve(`./src/components/page/Blog/Post`)
	const {
		data: {
			allContentfulPost: { edges },
		},
	} = await graphql(
		`
			{
				allContentfulPost {
					edges {
						node {
							title
							slug
							date
							readingTime
							content {
								content
							}
						}
					}
				}
			}
		`
	)
	edges.forEach(
		({
			node: {
				title,
				slug,
				date,
				readingTime,
				content: { content },
			},
		}) => {
			createPage({
				path: `/${slug}/`,
				component: blogPostTemplate,
				context: {
					title,
					date,
					readingTime,
					content,
				},
			})
		}
	)
}
