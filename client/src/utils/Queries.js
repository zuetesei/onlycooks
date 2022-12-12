import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
query Users {
    users {
      _id
      username
      email
    }
   }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      friendCount
      recipes {
        _id
        recipeText
        recipeName
        ingredients
        createdAt
        favoriteCount
        favorites {
          _id
          createdAt
          username
        }
      }
      friends {
        _id
        username
      }
    }
  }
`;

export const QUERY_RECIPES = gql`
  query recipes($username: String) {
    recipes(username: $username) {
      _id
      recipeText
      createdAt
      username
      favoriteCount
      favorites {
        _id
        createdAt
        username
      }
    }
  }
`;
