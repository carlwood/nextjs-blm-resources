import { gql } from "@apollo/client";
import client from "../lib/client";

export async function getHomepageContent() {
  return client
    .query({
      query: gql`
        query Homepage {
          homepage {
            hero {
              title
              subtitle
            }
          }
        }
      `,
    })
    .then((result) => result.data.homepage);
}
