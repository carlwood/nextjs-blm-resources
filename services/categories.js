
import { gql } from "@apollo/client";
import client from "../lib/client";

export async function getAllCategories() {
  return client
    .query({
      query: gql`
        query Categories {
          categories {
            id
            slug
            name
          }
        }
      `,
    })
    .then((result) => result.data.categories);
}

export async function getCategoryArticles(slug) {
  return client
    .query({
      query: gql`
        query Category($slug: String) {
          categories(where: { slug: $slug }) {
            name
            articles {
              slug
              title
            }
          }
        },
      `,
      variables: {
        slug
      }
    })
    .then((result) => result.data.categories);
}
