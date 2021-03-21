import Axios from 'axios';
import { mapOptions, Option } from 'common/mappers';
import { CharacterEntityApi } from './character-collection.api-model';

const baseUrl = process.env.RICK_AND_MORTY_API;

export const getCharacterCollection = async (options?: Option[]): Promise<{ results: CharacterEntityApi[], count: number }> => {
  const endpoint = options ? `${baseUrl}/character/?${mapOptions(options)}` : `${baseUrl}/character`;
  const { data: { results, info: { pages: count } } } = await Axios.get(endpoint);
  return { results, count };
};
