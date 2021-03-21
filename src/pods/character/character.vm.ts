export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  originName: string;
  image: string;
}

export const createEmptyCharacter = (): Character => ({
  id: "",
  name: "",
  status: "",
  species: "",
  originName: "",
  image: ""
});
