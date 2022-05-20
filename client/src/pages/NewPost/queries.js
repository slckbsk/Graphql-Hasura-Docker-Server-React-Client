import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query getAllUser {
    users {
      id
      fullName
    }
  }
`;

export const NEW_POST_MUTATION = gql`
mutation AddPost($data: posts_insert_input!) {
  insert_posts_one(object: $data) {
    id
    title
    description
    cover
  }
}
`;
