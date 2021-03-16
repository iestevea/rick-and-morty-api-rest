import Axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

const charactersApi = process.env.MOCK_API;

export interface Option {
  key: string;
  value: string | number;
}

const mapOptions = (options: Option[]) => {
  return options.reduce((acc: string, option: Option) => {
    acc = option.value ? `${acc}&${option.key}=${option.value}` : acc;
    return acc;
  }, '')
}

export const getCharacterCollection = async (options?: Option[]): Promise<CharacterEntityApi[]> => {
  const endpoint = options ? `${charactersApi}/character?${mapOptions(options)}` : `${charactersApi}/character`;
  const { data } = await Axios.get(endpoint);
  // const { data: { results, info: { pages: count } } } = await Axios.get(endpoint);
  return data;
};
