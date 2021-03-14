import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  hotel: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  ...hotel
});
