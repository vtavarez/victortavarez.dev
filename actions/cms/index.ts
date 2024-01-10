"use server";

const POST_GRAPHQL_FIELDS = `
slug
title
readingTime
image {
  url
}
date
intro
content
`;

interface Post {
  slug: string;
  title: string;
  readingTime: string;
  image: {
    url: string;
  };
  date: string;
  intro: string;
  content: string;
}

/**
 * Executes a GraphQL query using the Contentful GraphQL API.
 * @param query - The GraphQL query string.
 * @param preview - Optional flag indicating whether to use the preview access token.
 * @returns A Promise that resolves to the JSON response from the GraphQL API.
 * @throws An error if the request fails.
 */
async function contentful(query: string, preview = false): Promise<JSON> {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    },
  );

  if (!response.ok) throw new Error("Faild to fetch data");

  return await response.json();
}

/**
 * Extracts the first post from the response object.
 * @param response - The response object containing post data.
 * @returns The first post from the response.
 */
function extractPost(response: any): Post {
  return response?.data?.postCollection?.items?.[0];
}

/**
 * Extracts the posts from the response object.
 * @param response - The response object containing the posts.
 * @returns An array of Post objects.
 */
function extractPosts(response: any): Array<Post> {
  return response?.data?.postCollection?.items;
}

/**
 * Retrieves a collection of posts.
 * @param preview - Indicates whether to retrieve preview posts.
 * @returns A promise that resolves to the collection of posts.
 */
export async function getPostCollection(
  preview: boolean = false,
): Promise<Array<Post>> {
  const posts = await contentful(
    `query {
            postCollection(order: date_DESC, preview: ${
              preview ? "true" : "false"
            }, limit: 4) {
                items {
                    ${POST_GRAPHQL_FIELDS}
                }
            }
        }`,
    preview,
  );
  return extractPosts(posts);
}

/**
 * Retrieves a post by its slug.
 * @param slug - The slug of the post.
 * @param preview - Optional. Specifies whether to retrieve a preview of the post. Default is false.
 * @returns A promise that resolves to the post object.
 */
export async function getPost(
  slug: string,
  preview: boolean = false,
): Promise<Post> {
  const post = await contentful(
    `query {
            postCollection(where: { slug: "${slug}" }, limit: 1) {
                items {
                    ${POST_GRAPHQL_FIELDS}
                }
            }
        }`,
    preview,
  );
  return extractPost(post);
}
