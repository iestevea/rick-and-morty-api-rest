import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';
import { Episode } from './episode.api-model';

export const getEpisode = async (id: string | string[]): Promise<Episode | Episode[]> => {
  const query = gql`
    query($id: ID!) {
      episode(id: $id) {
          id
          name
          air_date
          episode
          characters{
            id
            name
            status
            species
            origin {name}
            image
          }
      }
    }
  `
  const { episode } = await graphQLClient.request(query, { id });
  return episode;
};
