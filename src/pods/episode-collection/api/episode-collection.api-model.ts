export interface EpisodeEntityApi {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Character[];
  url: string;
  created: string;
}

interface Character {
  name: string;
}
