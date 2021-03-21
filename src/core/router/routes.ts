import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  editCharacter: string;
  episodeCollection: string;
  editEpisode: string;
  locationCollection: string;
  editLocation: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  editCharacter: '/characters/:id',
  episodeCollection: '/episodes',
  editEpisode: '/episodes/:id',
  locationCollection: '/locations',
  editLocation: '/locations/:id'
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'editCharacter' | 'editEpisode' | 'editLocation'> {
  editCharacter: NavigationFunction;
  editEpisode: NavigationFunction;
  editLocation: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editCharacter: (id) => generatePath(switchRoutes.editCharacter, { id }),
  editEpisode: (id) => generatePath(switchRoutes.editEpisode, { id }),
  editLocation: (id) => generatePath(switchRoutes.editLocation, { id }),
};
