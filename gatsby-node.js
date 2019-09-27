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
							id
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

	group.forEach(async tag => {
		const { fieldValue } = tag
		const {
			data: {
				allContentfulPost: { edges: tagEdges },
			},
		} = await graphql(
			`
				query($tag: String) {
					allContentfulPost(
						filter: { tags: { in: [$tag] } }
						sort: { fields: date, order: DESC }
					) {
						edges {
							node {
								id
								date
								intro
								readingTime
								slug
								tags
								title
							}
						}
					}
				}
			`,
			{ tag: fieldValue }
		)
		createPage({
			path: `/blog/tags/${fieldValue}`,
			component: tagPage,
			context: {
				tag: fieldValue,
				edges: tagEdges,
			},
		})
	})
}
