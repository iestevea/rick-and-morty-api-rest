import Axios from 'axios';
import { Character } from './character.api-model';
import { Lookup } from 'common/models';

const charactersApi = process.env.RICK_AND_MORTY_API;

export const getCharacter = async (id: string | string[]): Promise<Character | Character[]> => {
  const { data } = await Axios.get(`${charactersApi}/character/${id}`);
  return data;
};

export const getLocations = async (): Promise<Lookup[]> => {
  const { data: { results } } = await Axios.get(`${charactersApi}/location`);
  return results;
};
