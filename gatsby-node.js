const path = require('path')

exports.createPages = async ({ graphql, actions: { createPage } }) => {
	const articlePage = path.resolve(`src/templates/article`)
	const tagsPage = path.resolve(`src/templates/tags`)
	const tagPage = path.resolve(`src/templates/tag`)
	const blogPage = path.resolve(`src/templates/blog`)

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

	const blogPostsPerPage = 6
	const numberBlogPages = Math.ceil(edges.length / blogPostsPerPage)

	Array.from({ length: numberBlogPages }).forEach(async (_, i) => {
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
			{ skip: i * blogPostsPerPage, limit: blogPostsPerPage }
		)

		createPage({
			path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
			component: blogPage,
			context: {
				posts,
				numberBlogPages,
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

	group.map(async tag => {
		const { fieldValue } = tag
		const {
			data: {
				allContentfulPost: { totalCount },
			},
		} = await graphql(
			`
				query($tag: String) {
					allContentfulPost(filter: { tags: { in: [$tag] } }) {
						totalCount
					}
				}
			`,
			{ tag: fieldValue }
		)

		const tagPostsPerPage = 6
		const numberTagPages = Math.ceil(totalCount / tagPostsPerPage)

		Array.from({ length: numberTagPages }).forEach(async (_, i) => {
			const {
				data: {
					allContentfulPost: { edges: posts },
				},
			} = await graphql(
				`
					query($tag: String, $skip: Int!, $limit: Int!) {
						allContentfulPost(
							filter: { tags: { in: [$tag] } }
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
				{ tag: fieldValue, skip: i * blogPostsPerPage, limit: blogPostsPerPage }
			)

			createPage({
				path:
					i === 0
						? `/blog/tags/${fieldValue}`
						: `/blog/tags/${fieldValue}/${i + 1}`,
				component: tagPage,
				context: {
					posts,
					numberTagPages,
					currentPage: i + 1,
					location: `/blog/tags/${fieldValue}`,
					data: fieldValue,
				},
			})
		})
	})
}
