import Axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

const charactersApi = process.env.CHARACTERS_API;

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
  const endpoint = options ? `${charactersApi}/character/?${mapOptions(options)}` : `${charactersApi}/character`;
  console.log(endpoint);
  const { data: { results, info: { pages: count } } } = await Axios.get(endpoint);
  return { results, count };
};
