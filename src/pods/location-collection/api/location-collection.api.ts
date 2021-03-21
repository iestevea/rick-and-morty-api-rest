import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';
import { mapOptions, Option } from 'common/mappers';
import { LocationEntityApi } from './location-collection.api-model';

export const getLocationCollection = async (options?: Option[]): Promise<{ results: LocationEntityApi[], count: number }> => {
  const mappedOptions = mapOptions(options);
  const query = gql`query($page: Int!, $name: String) {
    locations(page: $page, filter: { name: $name }) {
      info {
        pages
      }
      results {
        id
        name
        type
        dimension
        residents {name}
      }
    }
  }`
  const { locations: { results, info: { pages: count } } } = await graphQLClient.request(query, { page: mappedOptions?.page || 1, name: mappedOptions?.name || "" })
  return { results, count };
};
