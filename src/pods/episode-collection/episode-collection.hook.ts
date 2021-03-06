import { mapToCollection, Option } from 'common/mappers';
import * as React from 'react';
import { getEpisodeCollection } from './api';
import { mapFromApiToVm } from './episode-collection.mapper';
import { EpisodeEntityVm } from './episode-collection.vm';

export const useEpisodeCollection = () => {

  const [episodeCollection, setEpisodeCollection] = React.useState<EpisodeEntityVm[]>([]);
  const [totalEpisodes, setTotalEpisodes] = React.useState(0);

  const loadEpisodeCollection = async (options: Option[]) => {
    const { results, count } = await getEpisodeCollection(options);
    setEpisodeCollection(mapToCollection(results, mapFromApiToVm));
    setTotalEpisodes(count);
  }

  return { totalEpisodes, episodeCollection, loadEpisodeCollection }
}
