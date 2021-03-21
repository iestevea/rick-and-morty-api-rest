import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';
import { mapOptions, Option } from 'common/mappers';
import { EpisodeEntityApi } from './episode-collection.api-model';

export const getEpisodeCollection = async (options?: Option[]): Promise<{ results: EpisodeEntityApi[], count: number }> => {
  // const endpoint = options ? `${baseUrl}/episode/?${mapOptions(options)}` : `${baseUrl}/episode`;
  const query = gql`query($page: Int!, $name: String) {
    episodes(page: $page, filter: { name: $name }) {
      info {
        count
      }
      results {
        id
        name
        air_date
        episode
        characters {name}
      }
    }
  }`
  const { episodes: { results, info: { count } } } = await graphQLClient.request(query, { page: 1, name: "" })
  return { results, count };
};
