import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query getAllUser {
    users {
      id
      fullName
    }
  }
`;

export const CREATE_COMMENT_MUTATION = gql`
mutation createComment($data: comments_insert_input!) {
  insert_comments_one(object: $data) {
    id
    text
  }
}
`;

export const COMMENTS_SUBSCRIPTION = gql`
  subscription getComments($post_id: Int!) {
    comments(where: { post_id: { _eq: $post_id } }) {
      id
      text
      user {
        fullName
        profile_photo
      }
    }
  }
`;
