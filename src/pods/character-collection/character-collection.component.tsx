import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import * as classes from './character-collection.styles';
import { Button } from '@material-ui/core';
import { CharacterCard } from './components/character-card.component';

interface Props {
  characterCollection: CharacterEntityVm[];
  onCreateCharacter: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const CharacterCollectionComponent: React.FC<Props> = ({
  characterCollection,
  onCreateCharacter,
  onDelete,
  onEdit,
}) => {
  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={onCreateCharacter}>
        Add character
      </Button>

      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard
              character={character}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
