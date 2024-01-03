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

async function graphQL(query: string, preview = false) {
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

function extractPost(response: any): Post {
  return response?.data?.postCollection?.items?.[0];
}

function extractPosts(response: any): Post[] {
  return response?.data?.postCollection?.items;
}

export async function getPostCollection(preview: boolean = false) {
  const posts = await graphQL(
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

export async function getPost(slug: string, preview: boolean = false) {
  const post = await graphQL(
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
