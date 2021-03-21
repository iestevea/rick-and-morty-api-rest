import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';
import { mapOptions, Option } from 'common/mappers';
import { EpisodeEntityApi } from './episode-collection.api-model';

export const getEpisodeCollection = async (options?: Option[]): Promise<{ results: EpisodeEntityApi[], count: number }> => {
  const mappedOptions = mapOptions(options);
  const query = gql`query($page: Int!, $name: String) {
    episodes(page: $page, filter: { name: $name }) {
      info {
        pages
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
  const { episodes: { results, info: { pages: count } } } = await graphQLClient.request(query, { page: mappedOptions?.page || 1, name: mappedOptions?.name || "" })
  return { results, count };
};
