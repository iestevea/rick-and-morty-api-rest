import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';
import { Character } from './character.api-model';

export const getCharacter = async (id: string | string[]): Promise<Character | Character[]> => {
  const query = gql`
    query($id: ID!) {
      character(id: $id) {
          id
          name
          status
          species
          origin {name}
          image
      }
    }
  `
  const { character } = await graphQLClient.request(query, { id });
  return character;
};
