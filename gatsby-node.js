const path = require('path')

exports.createPages = async ({ graphql, actions: { createPage } }) => {
	const articlePage = path.resolve(`./src/templates/Article`)
	const tagPage = path.resolve(`./src/templates/Tag`)
	const blogPage = path.resolve(`./src/templates/Blog`)

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
							title
							slug
							date
							readingTime
							tags
							intro
							content {
								content
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

	createPage({
		path: `/blog/`,
		component: blogPage,
		context: {
			edges,
		},
	})

	edges.forEach(
		({
			node: {
				title,
				slug,
				date,
				readingTime,
				tags,
				content: { content },
			},
		}) => {
			createPage({
				path: `/blog/${slug}/`,
				component: articlePage,
				context: {
					title,
					date,
					readingTime,
					tags,
					content,
				},
			})
		}
	)

	group.forEach(tag => {
		const { fieldValue } = tag
		createPage({
			path: `/blog/tag/${fieldValue}`,
			component: tagPage,
			context: {
				tag: fieldValue,
			},
		})
	})
}
