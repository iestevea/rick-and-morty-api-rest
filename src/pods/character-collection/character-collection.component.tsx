import * as React from 'react';
import { Option } from 'common/mappers';
import { useDebounce } from 'use-debounce';
import { CharacterEntityVm } from './character-collection.vm';
import * as classes from './character-collection.styles';
import { TextField, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { CharacterCard } from './components/character-card.component';

interface Props {
  total: number;
  characterCollection: CharacterEntityVm[];
  onSearchBy: (options: Option[]) => void;
  onEdit: (id: string) => void;
}

export const CharacterCollectionComponent: React.FC<Props> = ({
  total,
  characterCollection,
  onSearchBy,
  onEdit,
}) => {
  const [page, setPage] = React.useState<number>(1);
  const [filter, setFilter] = React.useState('');
  const [debouncedFilter] = useDebounce(filter, 500);

  React.useEffect(() => {
    setPage(1);
    onSearchBy([
      { key: 'name', value: debouncedFilter },
      { key: 'page', value: 1 },
    ]);
  }, [debouncedFilter]);

  return (
    <div className={classes.root}>
      <div>
        <Typography variant="subtitle1" gutterBottom>
          Filter by character:
        </Typography>
        <TextField
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          label="Character"
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
      <Pagination
        color="primary"
        variant="outlined"
        count={total}
        onChange={(e, newPage) => {
          setPage(newPage);
          onSearchBy([
            { key: 'name', value: debouncedFilter },
            { key: 'page', value: newPage },
          ]);
        }}
        page={page}
      />
    </div>
  );
};
