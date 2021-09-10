import { gql } from "@apollo/client";
import client from "../lib/client";

export async function getGlobalContent() {
  return client
    .query({
      query: gql`
        query Footer {
          global {
            Footer
          }
        }
      `,
    })
    .then((result) => result.data.global);
}
