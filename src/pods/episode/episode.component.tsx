import { linkRoutes } from 'core/router';
import * as React from 'react';
import { useHistory } from 'react-router-dom';

export const EpisodeComponent = () => {
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

  return <p>This is episode component</p>;
};
