import { linkRoutes } from 'core/router';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Episode } from './episode.vm';
import * as classes from './episode.styles';
import {
  IconButton,
  Typography,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { CharacterCard } from './components/character-card.component';

interface Props {
  episode: Episode;
  onGoBack: () => void;
  onCharacterEdit: (id: string) => void;
}

export const EpisodeComponent: React.FC<Props> = ({
  episode,
  onGoBack,
  onCharacterEdit,
}) => {
  return (
    <div className={classes.root}>
      <IconButton onClick={() => onGoBack()}>
        <ArrowBackIcon />{' '}
      </IconButton>
      <Typography variant="subtitle1" gutterBottom>
        Episode: {episode.name}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Fecha: {episode.air_date}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Characters:
      </Typography>
      <ul className={classes.list}>
        {episode.characters.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onEdit={onCharacterEdit} />
          </li>
        ))}
      </ul>
    </div>
  );
};
