import Axios from 'axios';
import { mapOptions, Option } from 'common/mappers';
import { getCharacter } from 'pods/character/api';
import { EpisodeEntityApi } from './episode-collection.api-model';

const baseUrl = process.env.RICK_AND_MORTY_API;

const mapEpisodes = async (episodes) => {
  const promises = [];
  episodes.map((result) => promises.push(getCharacters(result.characters.map((ch) => ch.split('/').pop()).join(','))))
  const responses = await Promise.all(promises);
  return episodes.map((episode, index) => ({ ...episode, characters: responses[index] }));
}

export const getEpisodeCollection = async (options?: Option[]): Promise<{ results: EpisodeEntityApi[], count: number }> => {
  const endpoint = options ? `${baseUrl}/episode/?${mapOptions(options)}` : `${baseUrl}/episode`;
  const { data: { results, info: { pages: count } } } = await Axios.get(endpoint);
  return { results: await mapEpisodes(results), count };
};

export const getCharacters = async (ids: string[]) => {
  const data = await getCharacter(ids);
  return Array.isArray(data) ? data.map((character) => character.name) : data;
};
