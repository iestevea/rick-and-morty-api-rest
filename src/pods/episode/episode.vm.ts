export interface Episode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: Character[];
}

export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  originName: string;
  image: string;
}

export const createEmptyEpisode = (): Episode => ({
  id: "",
  name: "",
  air_date: "",
  episode: "",
  characters: []
});
