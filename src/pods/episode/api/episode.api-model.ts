interface UrlEntity {
  name: string,
  url: string
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Character[];
  url: string;
  created: string;
}

export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: UrlEntity;
  location: UrlEntity;
  image: string;
  episode: string[];
  url: string;
  created: string;
  comment?: string
}
