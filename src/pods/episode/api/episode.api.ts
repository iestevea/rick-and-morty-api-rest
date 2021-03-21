import Axios from 'axios';
import { getCharacter } from 'pods/character/api';
import { Episode } from './episode.api-model';

const episodesApi = process.env.RICK_AND_MORTY_API;

const mapEpisode = async (episode) => {
  const response = await getCharacters(episode.characters.map((ch) => ch.split('/').pop()).join(','));
  return { ...episode, characters: response };
}

export const getEpisode = async (id: string | string[]): Promise<Episode | Episode[]> => {
  const { data } = await Axios.get(`${episodesApi}/episode/${id}`);
  return await mapEpisode(data);
};

export const getCharacters = async (ids: string[]) => {
  return await getCharacter(ids);
};
