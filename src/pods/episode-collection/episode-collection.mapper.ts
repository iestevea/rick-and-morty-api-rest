import * as apiModel from "./api/episode-collection.api-model";
import * as vmModel from "./episode-collection.vm";

export const mapFromApiToVm = (episode: apiModel.EpisodeEntityApi): vmModel.EpisodeEntityVm => ({
  ...episode,
  characters: episode.characters.map((character) => character.name),
  id: episode.id.toString()
})
