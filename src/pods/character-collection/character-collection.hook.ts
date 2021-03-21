import * as React from 'react';
import { Option } from 'common/mappers';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>(
    []
  );
  const [totalCharacters, setTotalCharacters] = React.useState(0);

  const loadCharacterCollection = (options: Option[]) => {
    getCharacterCollection(options).then(({ results, count }) => {
      setCharacterCollection(mapToCollection(results, mapFromApiToVm))
      setTotalCharacters(count);
    });
  };

  return { characterCollection, loadCharacterCollection, totalCharacters };
};
