import * as React from 'react';
import { Option } from 'common/mappers';
import { useDebounce } from 'use-debounce';
import { LocationEntityVm } from './location-collection.vm';
import * as classes from './location-collection.styles';
import { TextField, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { LocationCard } from './components/location-card.component';

interface Props {
  total: number;
  locationCollection: LocationEntityVm[];
  onSearchBy: (options: Option[]) => void;
  onEdit: (id: string) => void;
}

export const LocationCollectionComponent: React.FC<Props> = ({
  total,
  locationCollection,
  onSearchBy,
  onEdit,
}) => {
  const [page, setPage] = React.useState<number>(1);
  const [filter, setFilter] = React.useState('');
  const [debouncedFilter] = useDebounce(filter, 500);

  React.useEffect(() => {
    onSearchBy([{ key: 'name', value: debouncedFilter }]);
  }, [debouncedFilter]);

  return (
    <div className={classes.root}>
      <div>
        <Typography variant="subtitle1" gutterBottom>
          Filter by location:
        </Typography>
        <TextField
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          label="Location"
          variant="outlined"
          size="small"
        />
      </div>
      <ul className={classes.list}>
        {locationCollection.map((location) => (
          <li key={location.id}>
            <LocationCard location={location} onEdit={onEdit} />
          </li>
        ))}
      </ul>
      <Pagination
        color="primary"
        variant="outlined"
        count={total}
        onChange={(e, newPage) => {
          setPage(newPage);
          onSearchBy([{ key: 'page', value: newPage }]);
        }}
        page={page}
      />
    </div>
  );
};
