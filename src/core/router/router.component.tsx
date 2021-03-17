import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CharacterCollectionScene, CharacterScene } from 'scenes';
import { EpisodeCollectionScene } from 'scenes/episode-collection.scene';
import { EpisodeScene } from 'scenes/episode.scene';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.characterCollection]}
          component={CharacterCollectionScene}
        />
        <Route
          exact={true}
          path={switchRoutes.editCharacter}
          component={CharacterScene}
        />
        <Route
          exact={true}
          path={switchRoutes.episodeCollection}
          component={EpisodeCollectionScene}
        />
        <Route
          exact={true}
          path={switchRoutes.editEpisode}
          component={EpisodeScene}
        />
      </Switch>
    </HashRouter>
  );
};
