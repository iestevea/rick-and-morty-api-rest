import Axios from 'axios';
import { mapOptions, Option } from 'common/mappers';
import { LocationEntityApi } from './location-collection.api-model';

const baseUrl = process.env.RICK_AND_MORTY_API;

export const getLocationCollection = async (options?: Option[]): Promise<{ results: LocationEntityApi[], count: number }> => {
  const endpoint = options ? `${baseUrl}/location/?${mapOptions(options)}` : `${baseUrl}/location`;
  const { data: { results, info: { pages: count } } } = await Axios.get(endpoint);
  return { results, count };
};
