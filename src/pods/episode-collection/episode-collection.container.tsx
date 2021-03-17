import { linkRoutes } from 'core/router';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Option } from './api';
import { EpisodeCollectionComponent } from './episode-collection.component';
import { useEpisodeCollection } from './episode-collection.hook';

export const EpisodeCollectionContainer = () => {
  const {
    episodeCollection,
    loadEpisodeCollection,
    totalEpisodes,
  } = useEpisodeCollection();
  const history = useHistory();

  React.useEffect(() => {
    loadEpisodeCollection();
  }, []);

  const handleEdit = (id: string) => {
    history.push(linkRoutes.editEpisode(id));
  };

  const handleSearchBy = (options: Option[]) => {
    // filterEpisodeCollection(options);
  };

  return (
    <EpisodeCollectionComponent
      total={totalEpisodes}
      episodeCollection={episodeCollection}
      onSearchBy={handleSearchBy}
      onEdit={handleEdit}
    />
  );
};
