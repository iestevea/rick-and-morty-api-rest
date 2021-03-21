import { linkRoutes } from 'core/router';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Option } from './api';
import { CharacterCollectionComponent } from './character-collection.component';
import { useCharacterCollection } from './character-collection.hook';

export const CharacterCollectionContainer = () => {
  const {
    characterCollection,
    loadCharacterCollection,
  } = useCharacterCollection();
  const history = useHistory();

  const handleEdit = (id: string) => {
    history.push(linkRoutes.editCharacter(id));
  };

  const handleSearchBy = (options: Option[]) => {
    loadCharacterCollection(options);
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onSearchBy={handleSearchBy}
      onEdit={handleEdit}
    />
  );
};
