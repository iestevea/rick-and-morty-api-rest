import * as apiModel from './api/episode.api-model';
import * as viewModel from './episode.vm';

export const mapEpisodeFromApiToVm = (
  episode: apiModel.Episode
): viewModel.Episode => ({
  id: episode.id.toString(),
  name: episode.name,
  air_date: episode.air_date,
  episode: episode.episode,
  characters: episode.characters.map((character) => mapCharacterFromApiToVm(character))
});

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  id: character.id.toString(),
  name: character.name,
  status: character.status,
  species: character.species,
  originName: character.origin.name,
  image: character.image,
});
