import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';
import { mapOptions, Option } from 'common/mappers';
import { CharacterEntityApi } from './character-collection.api-model';

export const getCharacterCollection = async (options?: Option[]): Promise<{ results: CharacterEntityApi[], count: number }> => {
  const mappedOptions = mapOptions(options);
  const query = gql`query($page: Int!, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        pages
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
  console.log('options', options);
  console.log('mappedOptions', mappedOptions);
  const { characters: { results, info: { pages: count } } } = await graphQLClient.request(query, { page: mappedOptions?.page || 1, name: mappedOptions?.name || "" })
  return { results, count };
};
