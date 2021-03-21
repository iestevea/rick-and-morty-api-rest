import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';
import { mapOptions, Option } from 'common/mappers';
import { CharacterEntityApi } from './character-collection.api-model';

export const getCharacterCollection = async (options?: Option[]): Promise<{ results: CharacterEntityApi[], count: number }> => {
  // const endpoint = options ? `${baseUrl}/character/?${mapOptions(options)}` : `${baseUrl}/character`;
  const query = gql`query($page: Int!, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
      }
      results {
        id
        name
        status
        species
        origin {name}
        image
      }
    }
  }`
  const { characters: { results, info: { count } } } = await graphQLClient.request(query, { page: 1, name: "" })
  return { results, count };
};
