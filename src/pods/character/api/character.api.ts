import Axios from 'axios';
import { Character } from './character.api-model';
import { Lookup } from 'common/models';

const charactersApi = process.env.MOCK_API;

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await Axios.get(`${charactersApi}/character/${id}`);
  return Array.isArray(data) ? data[0] : data;
};

export const getLocations = async (): Promise<Lookup[]> => {
  const { data } = await Axios.get(`${charactersApi}/location`);
  return data;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  await Axios.patch(`${charactersApi}/character/${character.id}`, { ...character })
  return true;
};
