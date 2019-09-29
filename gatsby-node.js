const path = require('path')

exports.createPages = async ({ graphql, actions: { createPage } }) => {
	const articlePage = path.resolve(`./src/templates/Article`)
	const tagsPage = path.resolve(`./src/templates/Tags`)
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
							date(formatString: "MMMM Do, YYYY")
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

	// Creates Blog Pages

	const postsPerPage = 6
	const numPages = Math.ceil(edges.length / postsPerPage)

	Array.from({ length: numPages }).forEach(async (_, i) => {
		const {
			data: {
				allContentfulPost: { edges: posts },
			},
		} = await graphql(
			`
				query($skip: Int!, $limit: Int!) {
					allContentfulPost(
						sort: { fields: date, order: DESC }
						limit: $limit
						skip: $skip
					) {
						edges {
							node {
								id
								date(formatString: "MMMM Do, YYYY")
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
			{ skip: i * postsPerPage, limit: postsPerPage }
		)

		createPage({
			path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
			component: blogPage,
			context: {
				posts,
				numPages,
				currentPage: i + 1,
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

	// Creates Tags Page

	createPage({
		path: `/blog/tags/`,
		component: tagsPage,
		context: {
			group,
		},
	})

	// Creates Tag Pages

	group.map(async tag => {
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
								date(formatString: "MMMM Do, YYYY")
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
