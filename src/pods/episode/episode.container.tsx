import { linkRoutes } from 'core/router';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { EpisodeComponent } from './episode.component';

export const EpisodeContainer = () => {
  // const {
  //   episodeCollection,
  //   loadEpisodeCollection,
  //   filterEpisodeCollection,
  //   totalEpisodes,
  // } = useEpisodeCollection();
  // const history = useHistory();

  // React.useEffect(() => {
  //   loadEpisodeCollection();
  // }, []);

  // const handleEdit = (id: string) => {
  //   history.push(linkRoutes.editEpisode(id));
  // };

  // const handleSearchBy = (options: Option[]) => {
  //   filterEpisodeCollection(options);
  // };

  return <EpisodeComponent />;
};
