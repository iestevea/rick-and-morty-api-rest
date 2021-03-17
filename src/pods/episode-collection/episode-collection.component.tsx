import * as React from 'react';
import { Option } from './api/episode-collection.api';
import { useDebounce } from 'use-debounce';
import { EpisodeEntityVm } from './episode-collection.vm';
import * as classes from './episode-collection.styles';
import { TextField, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { EpisodeCard } from './components/episode-card.component';

interface Props {
  total: number;
  episodeCollection: EpisodeEntityVm[];
  onSearchBy: (options: Option[]) => void;
  onEdit: (id: string) => void;
}

export const EpisodeCollectionComponent: React.FC<Props> = ({
  total,
  episodeCollection,
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
      <ul className={classes.list}>
        {episodeCollection.map((episode) => (
          <li key={episode.id}>
            <EpisodeCard episode={episode} onEdit={onEdit} />
          </li>
        ))}
      </ul>
      <Pagination
        color="primary"
        variant="outlined"
        count={total}
        onChange={(e, newPage) => {
          setPage(newPage);
          // newPage > page ?  onNextPage() : onPreviousPage();
        }}
        page={page}
      />
    </div>
  );
};
