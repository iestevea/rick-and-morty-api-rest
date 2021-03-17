import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  editCharacter: string;
  episodeCollection: string;
  editEpisode: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  editCharacter: '/characters/:id',
  episodeCollection: '/episodes',
  editEpisode: '/episodes/:id'
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'editCharacter' | 'editEpisode'> {
  editCharacter: NavigationFunction;
  editEpisode: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editCharacter: (id) => generatePath(switchRoutes.editCharacter, { id }),
  editEpisode: (id) => generatePath(switchRoutes.editCharacter, { id }),
};
