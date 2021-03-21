import * as React from 'react';
import { Option } from './api/character-collection.api';
import { useDebounce } from 'use-debounce';
import { CharacterEntityVm } from './character-collection.vm';
import * as classes from './character-collection.styles';
import { TextField, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { CharacterCard } from './components/character-card.component';

interface Props {
  characterCollection: CharacterEntityVm[];
  onSearchBy: (options: Option[]) => void;
  onEdit: (id: string) => void;
}

export const CharacterCollectionComponent: React.FC<Props> = ({
  characterCollection,
  onSearchBy,
  onEdit,
}) => {
  const [filter, setFilter] = React.useState('');
  const [debouncedFilter] = useDebounce(filter, 500);

  React.useEffect(() => {
    onSearchBy([{ key: 'name', value: debouncedFilter }]);
  }, [debouncedFilter]);

  return (
    <div className={classes.root}>
      <div>
        <Typography variant="subtitle1" gutterBottom>
          Filtra por actor:
        </Typography>
        <TextField
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          label="Actor"
          variant="outlined"
          size="small"
        />
      </div>
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onEdit={onEdit} />
          </li>
        ))}
      </ul>
    </div>
  );
};
