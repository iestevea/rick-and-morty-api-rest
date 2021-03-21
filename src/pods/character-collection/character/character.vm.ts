export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  originName: string;
  image: string;
  comment: string;
}

export const createEmptyCharacter = (): Character => ({
  id: "",
  name: "",
  status: "",
  species: "",
  originName: "",
  image: "",
  comment: ""
});
