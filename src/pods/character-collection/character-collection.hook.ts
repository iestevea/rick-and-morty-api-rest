import * as React from 'react';
import { Option } from './api/character-collection.api'
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>(
    []
  );
  const [totalCharacters, setTotalCharacters] = React.useState(0);

  const loadCharacterCollection = () => {
    getCharacterCollection().then(({ results, count }) => {
      setCharacterCollection(mapToCollection(results, mapFromApiToVm))
      setTotalCharacters(count);
    });
  };

  const filterCharacterCollection = (options: Option[]) => {
    getCharacterCollection(options).then(({ results, count }) => {
      setCharacterCollection(mapToCollection(results, mapFromApiToVm))
      setTotalCharacters(count);
    });
  }

  return { characterCollection, loadCharacterCollection, filterCharacterCollection, totalCharacters };
};
