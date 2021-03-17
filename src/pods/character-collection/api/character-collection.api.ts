import Axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

const baseUrl = process.env.RICK_AND_MORTY_API;

export interface Option {
  key: string;
  value: string | number;
}

const mapOptions = (options: Option[]) => {
  return options.reduce((acc: string, option: Option) => {
    acc = `${acc}&${option.key}=${option.value}`
    return acc;
  }, '')
}

export const getCharacterCollection = async (options?: Option[]): Promise<{ results: CharacterEntityApi[], count: number }> => {
  const endpoint = options ? `${baseUrl}/character/?${mapOptions(options)}` : `${baseUrl}/character`;
  const { data: { results, info: { pages: count } } } = await Axios.get(endpoint);
  return { results, count };
};
