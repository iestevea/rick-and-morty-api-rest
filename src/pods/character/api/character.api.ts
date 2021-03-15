import Axios from 'axios';
import { Character } from './character.api-model';
import { Lookup } from 'common/models';

const charactersApi = process.env.CHARACTERS_API;

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await Axios.get(`${charactersApi}/character/${id}`);
  return data;
};

export const getLocations = async (): Promise<Lookup[]> => {
  const { data: { results } } = await Axios.get(`${charactersApi}/location`);
  return results;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  if (character)
    return true;
};
