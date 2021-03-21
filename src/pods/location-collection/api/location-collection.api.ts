import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';
import { mapOptions, Option } from 'common/mappers';
import { LocationEntityApi } from './location-collection.api-model';

const baseUrl = process.env.RICK_AND_MORTY_API;

export const getLocationCollection = async (options?: Option[]): Promise<{ results: LocationEntityApi[], count: number }> => {
  // const endpoint = options ? `${baseUrl}/location/?${mapOptions(options)}` : `${baseUrl}/location`;
  const query = gql`query($page: Int!, $name: String) {
    locations(page: $page, filter: { name: $name }) {
      info {
        count
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
  const { locations: { results, info: { count } } } = await graphQLClient.request(query, { page: 1, name: "" })
  return { results, count };
};
