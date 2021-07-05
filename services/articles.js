
import { gql } from "@apollo/client";
import client from "../lib/client";

export async function getAll() {
  return client
    .query({
      query: gql`
        query Articles {
          articles {
            id
            slug
            title
          }
        }
      `,
    })
    .then((result) => result.data.articles);
}

export async function getBySlug(slug) {
  return client
    .query({
      query: gql`
        query Article($slug: String) {
          articles(where: { slug: $slug }) {
            id
            title
            content
          }
        },
      `,
      variables: {
        slug
      }
    })
    .then((result) => result.data.articles);
}
