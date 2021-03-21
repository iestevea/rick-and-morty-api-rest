import { linkRoutes } from 'core/router';
import * as React from 'react';
import * as api from './api';
import { useHistory, useParams } from 'react-router-dom';
import { EpisodeComponent } from './episode.component';
import { mapEpisodeFromApiToVm } from './episode.mappers';
import { createEmptyEpisode, Episode } from './episode.vm';

export const EpisodeContainer = () => {
  const [episode, setEpisode] = React.useState<Episode>(createEmptyEpisode());
  const { id }: any = useParams();
  const history = useHistory();

  const handleLoadEpisode = async () => {
    const apiEpisode = await api.getEpisode(id);
    setEpisode(mapEpisodeFromApiToVm(apiEpisode as any));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadEpisode();
    }
  }, []);

  const handleGoBack = () => {
    history.push(linkRoutes.episodeCollection);
  };

  const handleCharacterEdit = (id: string) => {
    history.push(linkRoutes.editCharacter(id));
  };

  return (
    <EpisodeComponent
      episode={episode}
      onGoBack={handleGoBack}
      onCharacterEdit={handleCharacterEdit}
    />
  );
};
