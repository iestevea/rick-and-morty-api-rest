import * as apiModel from '../character/api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  id: character.id.toString(),
  name: character.name,
  status: character.status,
  species: character.species,
  originName: character.origin.name,
  image: character.image,
  comment: character?.comment || ""
});

export const mapCharacterFromVmToApi = (character: viewModel.Character): apiModel.Character =>
(({
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  originName: character.originName,
  image: character.image,
  comment: character.comment,
} as unknown) as apiModel.Character);
